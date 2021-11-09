import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/services/login-api.service';

@Component({
  selector: 'app-catogary-list',
  templateUrl: './catogary-list.component.html',
  styleUrls: ['./catogary-list.component.css'],
})
export class CatogaryListComponent implements OnInit {
  modalObjectParent = {
    modalHeader: '',
    id: '',
  };
  addEditModal = false;

  List: any[] = [];
  constructor(private getService: LoginApiService, private router: Router) {}

  ngOnInit(): void {
  this.categoryList()
    
  }

  categoryList() {
    this.getService.catList().subscribe((result) => {
      // console.log(result);
      this.List = result;
    });
  }

  categoryDel(id: any) {
    console.log('Id of List=' + id);
    this.getService.delete(id).subscribe(() => {
      // this.List = this.List.filter((p) => p.id !== id);
      this.categoryList()
    });
  }
  openAddEditModal(type: any, id: any) {
    this.addEditModal = true;
    if (type === 'Add') {
      this.modalObjectParent.modalHeader = 'Add';
    } else {
      this.modalObjectParent.modalHeader = 'Edit';
      this.modalObjectParent.id = id;
      // alert(this.modalObjectParent);
    }
  }
  closeAddEditModal(event:any) {
    this.addEditModal = false;
    this.categoryList()
  }
}
