import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expense.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { ViewComponent } from 'src/app/shared/view/view.component';
import { AddEditExpenseComponent } from '../add-edit-expense/add-edit-expense.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  @ViewChild(AddEditExpenseComponent) addeditExModal:AddEditExpenseComponent | undefined;
  // viewChild do work on use for curent update
  List: any[] = []; 

  category: any;
  categoryId: any;
  
  



  constructor(private modalService:NgbModal,private ExpService:ExpenseService) { }

  ngOnInit(): void {
    this.categoryList();
    // this.ExpService.ExpList().subscribe(res=>{
    //   console.log(res);
    //   this.List=res;
    // })
 
  }
  categoryList() {
    this.ExpService.ExpList().subscribe((result) => {
      // console.log(result);
      this.List = result;
    });
  }

  openModal(type:any,id:any) {
    const activeModal = this.modalService.open(AddEditExpenseComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });
    const detail={type:type,Id:id};
    activeModal.componentInstance.categoryType=detail;
    activeModal.result.then(
      (result) => {
        this.categoryList();             // use for curent update
        // if (result.status !== 'Cancel') {
        //   console.log('Modal Cancel');
        // }
      },
      (reason) => {}
    );
                      //both catogary use for curent update
    this.category = type;
    this.categoryId = id;
  }

  categoryDel(data:any){
    const activeModal = this.modalService.open(AlertComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    //data transfer to child
    const contentObj = {
      heading: 'Delete Expense-List!',
      message: 'Are you sure to Delate it?.',
      cancel: 'Cancel',
      ok: 'Delete'
    }
    activeModal.componentInstance.modalContent = contentObj;
    activeModal.result.then(
      (result) => {
      //data get from child inside the result
        console.log("Result="+result);
        // alert("hello vikas");
      
        if (result === 'delete') {
          this.ExpService.delete(data).subscribe(res=>{
            this.categoryList();
          })
        }
      },
      (reason) => {}
    );
  // this.ExpService.delete(data).subscribe(res=>{
    //   this.categoryList();
    // })
  }

  viewModal(id:any){
    const activeModal = this.modalService.open(ViewComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });
    
    //data transfer to child
    const content =  this.List.find(c => c.id === id);
    activeModal.componentInstance.viewContent = content;
    activeModal.result.then(
      (result) => {
     
      },
      (reason) => {}
    );
  }

}
