import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css'],
})
export class AddEditServiceComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;
  @Input() categoryType: any;
  clntid: any;
  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private httpS: ServiceService
  ) {
    this.reactiveForm = this.fb.group({
      serviceName: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      status:new FormControl('',[Validators.required]),
      // clientId:new FormControl(''),
    });
  }

  ngOnInit(): void {
    // console.log(this.categoryType.clientId);
    this.clntid = this.categoryType.clientId;
    console.log(this.clntid);
    this. patch();
  }
  patch(){
    if (this.categoryType.type === 'Edit'){
    const id1 = Number(this.categoryType.Id);
    this.httpS.patchItem(id1).subscribe((res) => {
      this.reactiveForm.patchValue(res);
    });
  }
   }
  get f() {
    return this.reactiveForm.controls;
  }
  modalClose() {
    this.activeModal.close('Cancel');
  }
  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }

    const data = {
      serviceName: this.reactiveForm.value.serviceName,
      price: this.reactiveForm.value.price,
      status:this.reactiveForm.value.status,
      clientId: this.clntid,
    };
    //  console.log(data);

    if (this.categoryType.type === 'Add') {
      this.httpS.create(data).subscribe(() => {});
    } else {
      const data1 = {
        serviceName: this.reactiveForm.value.serviceName,
        price: this.reactiveForm.value.price,
        status:this.reactiveForm.value.status,
        clientId: this.clntid,
      };
      const id1 = Number(this.categoryType.Id);
      // this.httpS.update(id1, this.reactiveForm.getRawValue()).subscribe(() => {
        this.httpS.update(id1, data1).subscribe(() => {
          // alert('Suceess');
        });
    }
    // this.modalClose();
    this.activeModal.close('ok');
  }
}
