import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AddEditClientComponent } from '../add-edit-client/add-edit-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @ViewChild(AddEditClientComponent) addeditExModal:AddEditClientComponent | undefined;
  list:any[]=[];

  category:any;
  categoryId:any;


  constructor(private modalService:NgbModal, private clientService:ClientService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this. clientList();
  }
  clientList(){
    this.clientService.catoList().subscribe((res)=>{
        this.list=res;
    });
     }


  openModal(type:any,id:any): void {
    const activeModal = this.modalService.open(AddEditClientComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });
    const detail={type:type,Id:id};
    activeModal.componentInstance.categoryType=detail;
    activeModal.result.then(
      (result) => {
      return  this.clientList();            
      },
      (reason) => {}
    );
    this.category = type;
    this.categoryId = id;
  }


  categoryDel(ID:any){
    const activeModal = this.modalService.open(AlertComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    //data transfer to child
    const contentObj = {
      heading: 'Delete Client-List!',
      message: 'Are you sure to Delate it?.',
      cancel: 'No',
      ok: 'Yes'
    }
    activeModal.componentInstance.modalContent = contentObj;
    activeModal.result.then(
      (result) => {
      //data get from child inside the result
        console.log("Result="+result);
        // alert("hello vikas");
      
        if (result === 'delete') {
          this.clientService.delete(ID).subscribe(res=>{
            this.clientList();
          })
        }
      },
      (reason) => {}
    );
  }

  viewModal(ID:any){
// this.router.navigate(['view'], {relativeTo:this.route});
this.router.navigate(['app/client/view']);

  }
  

}
