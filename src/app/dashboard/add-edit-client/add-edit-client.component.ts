import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted:boolean=false;
  @Input() categoryType:any;

  constructor(private activeModal:NgbActiveModal,private fb: FormBuilder , private clientS:ClientService) {
    this.reactiveForm=this.fb.group({
     name:new FormControl('',[Validators.required]),
     jobName:new FormControl('',[Validators.required]),
     companyName:new FormControl(''),
     email:new FormControl('',[Validators.required]),
     adress:new FormControl(''),
     phone:new FormControl(''),
     profile:new FormControl(''),
     companyType:new FormControl('',[Validators.required]),
     status:new FormControl('',[Validators.required]),
     whatsApp:new FormControl(''),
     paypal:new FormControl(''),
     skypeId:new FormControl(''),

    })
   }

  ngOnInit(): void {
    if(this.categoryType.type === 'Edit'){
     this.patch();
    }
  }
     patch(){
      const id1 = Number(this.categoryType.Id);
      this.clientS.patchItem(id1).subscribe((res) => {
        this.reactiveForm.patchValue(res);
      });
     }
  get f() {
    return this.reactiveForm.controls
  }
  modalClose(){
    this.activeModal.close('Cancel');
  }
  onSubmit(){
    this.submitted=true;
    if(this.reactiveForm.invalid){
      return;
    }
    if (this.categoryType.type === 'Add'){
      this.clientS.create(this.reactiveForm.value).subscribe(()=>{

      })
    }
    else{
      const id1 = Number(this.categoryType.Id);
      this.clientS.update(id1, this.reactiveForm.getRawValue()).subscribe(() => {
          // alert('Suceess');
        });
    }
    // this.modalClose();
    this.activeModal.close('ok');
    
  }

}
