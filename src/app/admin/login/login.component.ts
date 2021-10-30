import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder) {
    this.reactiveForm=this.fb.group({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
   }

  ngOnInit(): void {
  }
  get f(){
    return this.reactiveForm.controls
  }
  onSubmit(){
    this.submitted=true;
    
    if(this.reactiveForm.invalid){
      return;
    }
    console.log("value=", this.reactiveForm.value); 
  }

}
