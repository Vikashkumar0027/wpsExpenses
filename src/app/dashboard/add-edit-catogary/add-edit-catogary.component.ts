import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/services/login-api.service';

@Component({
  selector: 'app-add-edit-catogary',
  templateUrl: './add-edit-catogary.component.html',
  styleUrls: ['./add-edit-catogary.component.css'],
})
export class AddEditCatogaryComponent implements OnInit {
  @Input() modalObject: any;
  @Output() closeAddEditModal = new EventEmitter();
  //  hide:boolean=true;
  reactiveForm: FormGroup;
  constructor(
    private getService: LoginApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      catogary: new FormControl(''),
      description: new FormControl(''),
    });
    //
  }

  ngOnInit(): void {
    console.log('Add Edit Component');
    if (this.modalObject.modalHeader === 'Edit') {
      const id = Number(this.modalObject.id);
      this.getService
        .categoryItem(id)
        .subscribe((res) => {
          this.reactiveForm.patchValue(res)
        });
    }
  }
  onSubmit() {
    // alert(this.modalObject);
    const data = {
      catogary: this.reactiveForm.value.catogary,
      description: this.reactiveForm.value.description,
    };
    if (this.modalObject.modalHeader === 'Add') {
      this.getService.create(data).subscribe(
        (res) => {
          this.router.navigate(['expense']);
        },
        (err) => {
          console.log(err);
        }
      );
    } 
       else {
      this.getService
      .update(this.modalObject.id,this.reactiveForm.getRawValue())
      .subscribe( ()=>{
        // alert("Suceess")
        

        this.router.navigate(['/app/expense'])
      })
    }
    // console.log(this.reactiveForm.value);

    this.reactiveForm.reset();
    // $('#exampleModalCenter').modal('hide');
  }
  closeModal() { //its for ouput decorator 
    this.closeAddEditModal.emit('close')
  }
}
