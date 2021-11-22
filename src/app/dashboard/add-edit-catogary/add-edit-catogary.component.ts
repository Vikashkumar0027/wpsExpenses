import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { LoginApiService } from 'src/app/services/login-api.service';

@Component({
  selector: 'app-add-edit-catogary',
  templateUrl: './add-edit-catogary.component.html',
  styleUrls: ['./add-edit-catogary.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class AddEditCatogaryComponent implements OnInit {
  // category:any;//get Catogary type from category list
  categoryType: any; //get Catogary type from category list
    
  @Input() modalObject: any;
  @Output() closeAddEditModal = new EventEmitter();
  //  hide:boolean=true;
  reactiveForm: FormGroup;
  constructor(
    private getService: LoginApiService,
    private router: Router,
    private fb: FormBuilder,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;

    this.reactiveForm = this.fb.group({
      catogary: new FormControl(''),
      description: new FormControl(''),
    });
    //
  }

  ngOnInit(): void {
    console.log('Category' + this.categoryType);

    if (this.categoryType.categoryNam === 'Edit') {
      const id1 = Number(this.categoryType.ctgryId);
      this.getService.categoryItem(id1).subscribe((res) => {
        this.reactiveForm.patchValue(res);
      });
    }
  }

  modalClose() {
    this.activeModal.close('Cancel');
  }
  onSubmit() {
    const data = {
      catogary: this.reactiveForm.value.catogary,
      description: this.reactiveForm.value.description,
    };
    if (this.categoryType.categoryNam === 'Add') {
      this.getService.create(data).subscribe(
        () => {
          // this.closeModal();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      const id1 = Number(this.categoryType.ctgryId);
      this.getService.update(id1, this.reactiveForm.getRawValue()).subscribe(() => {
          alert('Suceess');
        });
    }

    this.reactiveForm.reset();
    this.modalClose(); //its use for close modal after save
    // alert("DAta of Input"+data.catogary);
  }

  closeModal() {
    //its for ouput decorator
    this.closeAddEditModal.emit('close');
  }
}
