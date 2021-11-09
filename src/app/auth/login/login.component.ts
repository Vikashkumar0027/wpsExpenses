import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted:boolean=false;
  myId:any;
  userData:any;

  constructor(private fb:FormBuilder, private userDatas:LoginApiService, private router:Router) {
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
    // console.log("value=", this.reactiveForm.value); 
    else if(this.reactiveForm.valid){

      const jsonData = JSON.stringify(this.submitted);
      sessionStorage.setItem('submitted', jsonData);

      // const getArrayValue = sessionStorage.getItem('submitted');
      // const myId1= JSON.parse(getArrayValue || '{}');
      // console.log("Session Work" + myId1);


      this.userDatas.user().subscribe(result =>{
       console.log("Result"+ result);
       this.myId=result;

       const email = this.reactiveForm.value.email;
       const password= this.reactiveForm.value.password ;
      this.userData=this.myId[this.myId.findIndex((u: { email: any; password: any; }) => u.email===email && u.password===password)];
      // console.log("find Index="+this.userData);

      if(!this.userData){
        alert("please enter the right username and passWord");
      }
      else{
        alert("sucess")
        this.router.navigate(['app']);
      
      }

      })
     
    }




    // this.reactiveForm.reset();
    // this.submitted=false;
  }

}

