import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {
  reactiveForm:FormGroup;
  submitted:boolean=false;
  @Input() categoryType:any;
  constructor(private fb:FormBuilder, private activeModal:NgbActiveModal,private httpS:ServiceService) { 
    this.reactiveForm=this.fb.group({
      serviceName:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
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
      this.httpS.create(this.reactiveForm.value).subscribe(()=>{

      })
    }
    // else{
    //   const id1 = Number(this.categoryType.Id);
    //   this.clientS.update(id1, this.reactiveForm.getRawValue()).subscribe(() => {
    //       // alert('Suceess');
    //     });
    // }
    this.modalClose();


  }

}
