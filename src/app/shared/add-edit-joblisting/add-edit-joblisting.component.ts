import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobListingService } from 'src/app/services/job-listing.service';
import { JobhistoryService } from 'src/app/services/jobhistory.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-edit-joblisting',
  templateUrl: './add-edit-joblisting.component.html',
  styleUrls: ['./add-edit-joblisting.component.css']
})
export class AddEditJoblistingComponent implements OnInit {
  submitted:boolean=false;
  reactiveForm:FormGroup;
  list:any[]=[];
  serviceList:any[]=[];
 
@Input() categoryType:any;  // also get client id to filter service

  constructor(private activeModal:NgbActiveModal,private fb:FormBuilder,
     private serviceshttp:ServiceService, private jobSev:JobListingService, private jobhistoryS:JobhistoryService) {
    this.reactiveForm=this.fb.group({
      date:new FormControl((new Date()).toISOString().substring(0, 10)),
      // date:[new Date()],
      service:new FormControl(''),
      quantity:new FormControl('')

    })
   }

  ngOnInit(): void {
    this.srvcLst(); //its use for service dropdown
    this. patch();
  }
  patch(){
    if (this.categoryType.type === 'Edit'){
      const id1=Number(this.categoryType.Id);
    this.jobSev.patchItem(id1).subscribe((res) => {
      // console.log("Patch value="+ res.service);
      this.reactiveForm.patchValue(res);
    });
  }
   }
  srvcLst(){
        this.serviceshttp.serviceList().subscribe((res)=>{
        this.list =res;
        const id1=Number(this.categoryType.clientId);
        this.serviceList = this.list.filter((c) => c.clientId === id1);
        });
  }
 
  get f() {
    return this.reactiveForm.controls;
  }
  modalClose() {
    this.activeModal.close('Cancel');
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.reactiveForm.value);
  

  const data = {
    date:this.reactiveForm.value.date,
    service: this.reactiveForm.value. service,
    quantity:this.reactiveForm.value.quantity,
    clientId: Number(this.categoryType.clientId)
  };
 
  //  console.log(data);
  if (this.categoryType.type === 'Add') {
    this.jobSev.create(data).subscribe(() => {
     
    });
  }
  else{
    
    const id2=Number(this.categoryType.Id);
    this.jobSev.patchItem(id2).subscribe((res) => {
      
      const data3 = {
        date:res.date,
        service: res. service,
        quantity:res.quantity,
        clientId: Number(res.clientId),
        jobId:Number(res.id)
      };
      console.log("Patch value="+  JSON.stringify(res));
      console.log("history value="+  JSON.stringify(data3));
      this.jobhistoryS.create(data3).subscribe(()=>{});
    });

    console.log("EDIT Number= "+ this.categoryType.Id);
    const id1 = Number(this.categoryType.Id);
      this.jobSev.update(id1, data).subscribe(() => {
        // alert('Suceess');
      
      });
  }
  // this.srvcLst(); 



  this.activeModal.close('ok');
}

}
