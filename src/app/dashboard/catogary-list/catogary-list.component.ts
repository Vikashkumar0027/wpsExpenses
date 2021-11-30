import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginApiService } from 'src/app/services/login-api.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AddEditCatogaryComponent } from '../add-edit-catogary/add-edit-catogary.component';

@Component({
  selector: 'app-catogary-list',
  templateUrl: './catogary-list.component.html',
  styleUrls: ['./catogary-list.component.css'],
})
export class CatogaryListComponent implements OnInit {
  @ViewChild(AddEditCatogaryComponent) addeditModalComponent:
    | AddEditCatogaryComponent
    | undefined;

  // modalObjectParent = {
  //   modalHeader: '',
  //   id: '',
  // };
  id: any;
  category: any;
  categoryId: any;
  modalObjectParent = 'Add';
  modalObjectParents = 'Edit';
  addEditModal = false;

  List: any[] = [];

  reactiveForm: FormGroup;
  constructor(
    private getService: LoginApiService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.reactiveForm = this.fb.group({
      catogary: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.categoryList();
  }
  openModal(catgry: any, categoryid: any) {
    const activeModal = this.modalService.open(AddEditCatogaryComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    const ctgry = { categoryNam: catgry, ctgryId: categoryid };
    activeModal.componentInstance.categoryType = ctgry; //send catogary ype into add-edit Modal
    activeModal.result.then(
      (result) => {
        if(result ==="Cancel"){
          this.categoryList();
        }
        
      },
      (reason) => {}
    );
    this.category = catgry;
    this.categoryId = categoryid;
  }

  categoryList() {
    this.getService.catList().subscribe((result) => {
      // console.log(result);
      this.List = result;
    });
  }

  categoryDel(id: any) {
    const activeModal = this.modalService.open(AlertComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    //data transfer to child
    const contentObj = {
      heading: 'Delete Catogary-List!',
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
          this.getService.delete(id).subscribe(() => {
            // this.List = this.List.filter((p) => p.id !== id);
            this.categoryList();
          });
        }
      },
      (reason) => {}
    );







    
    // console.log('Id of List=' + id);
    // this.getService.delete(id).subscribe(() => {
    //   // this.List = this.List.filter((p) => p.id !== id);
    //   this.categoryList();
    // });
  }




  closeAddEditModal(event: any) {
    this.addEditModal = false;
    // this.getDismissReason('Close')
    this.categoryList();
  }














  // open(content: any, id: any) {
  //   this.modalService.open(content);
  //   this.id = id;
  //   // alert(id);

  //   const id1 = Number(this.id);
  //   this.getService.categoryItem(id1).subscribe((res) => {
  //     this.reactiveForm.patchValue(res);
  //   });
  // }

  // EditSubmit() {
  //   const data = {
  //     catogary: this.reactiveForm.value.catogary,
  //     description: this.reactiveForm.value.description,
  //   };

  //   this.getService
  //     .update(this.id, this.reactiveForm.getRawValue())
  //     .subscribe(() => {
  //       // alert("Suceess")
  //       this.categoryList();
  //     });
  //   this.reactiveForm.reset();
  // }
}
