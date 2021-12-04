import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobListingService } from 'src/app/services/job-listing.service';
import { JobhistoryService } from 'src/app/services/jobhistory.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-edit-joblisting',
  templateUrl: './add-edit-joblisting.component.html',
  styleUrls: ['./add-edit-joblisting.component.css'],
})
export class AddEditJoblistingComponent implements OnInit {
  submitted: boolean = false;
  reactiveForm: FormGroup;
  list: any[] = [];
  serviceList: any[] = [];
  serviceclientId: any;

  @Input() categoryType: any; // also get client id to filter service

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private serviceshttp: ServiceService,
    private jobSev: JobListingService,
    private jobhistoryS: JobhistoryService
  ) {
    this.reactiveForm = this.fb.group({
      date: new FormControl(new Date().toISOString().substring(0, 10)),
      service: [''],
      quantity: [''],
    });
  }

  ngOnInit(): void {
    this.srvcLst(); //its use for service dropdown
    this.patch();
  }

  patch() {
    if (this.categoryType.type === 'Edit') {
      const id1 = Number(this.categoryType.Id);
      this.jobSev.patchItem(id1).subscribe((res) => {

        const patchdata = {
          date: res.date,
          service: res.serviceId,
          // service:res.service,
          quantity: res.quantity,
        };
        console.log(res.serviceId);
        // console.log("Patch value="+ JSON.stringify(patchdata));
        console.log('Work on patchdata=' + JSON.stringify(patchdata));
        console.log('Work on patch reactiveform=' + JSON.stringify(this.reactiveForm.value));
        this.reactiveForm.patchValue(patchdata);
        // this.reactiveForm.patchValue(service.{ serviceName:res.service });
      });
    }
  }
  srvcLst() {
    this.serviceshttp.serviceList().subscribe((res) => {
      this.list = res;

      const id1 = Number(this.categoryType.clientId);
      // this.serviceclientId=this.list.find((c=>c.id===id1));
      // // console.log("Service list with client Id= "+ JSON.stringify(this.serviceclientId));
      // console.log("Service list with client Id= "+ this.serviceclientId.clientId);

      // const id1=Number(this.categoryType.serviceId);
      this.serviceList = this.list.filter((c) => c.clientId === id1);
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }
  modalClose() {
    this.activeModal.close('Cancel');
  }
  onSubmit() {
    this.submitted = true;
    // console.log(this.reactiveForm.value);


    //  console.log(data);
    if (this.categoryType.type === 'Add') {

      const data = {
        date: this.reactiveForm.value.date,
        // service: this.reactiveForm.value.service.serviceName,
        service: this.list.find((c)=>c.id === this.reactiveForm.value.service).serviceName,
        serviceId: this.reactiveForm.value.service,
        quantity: this.reactiveForm.value.quantity,
        clientId: Number(this.categoryType.clientId),
        history: 0,
      };

    // const name= this.list.find((c)=>c.id === this.reactiveForm.value.service).serviceName;


      this.jobSev.create(data).subscribe(() => { });

      // console.log("ididi name=="+name);
      // console.log("Add with Id="+JSON.stringify(data) );
      // console.log("serivice with Id="+JSON.stringify(data) );
      //  console.log("service=="+this.reactiveForm.value.service.serviceName);
    } else {
      //its use for History data
      const id2 = Number(this.categoryType.Id);
      this.jobSev.patchItem(id2).subscribe((res) => {
        const data3 = {
          date: res.date,
          service: res.service,
          serviceId: res.serviceId,
          quantity: res.quantity,
          clientId: Number(res.clientId),
          jobId: Number(res.id),
        };
        // console.log("Patch value="+  JSON.stringify(res));
        // console.log("history value="+  JSON.stringify(data3));

      
        this.jobhistoryS.create(data3).subscribe(()=>{});
      });
      const data1 = {
        date: this.reactiveForm.value.date,
        // service: this.reactiveForm.value.service.serviceName,
        service: this.list.find((c)=>c.id === this.reactiveForm.value.service).serviceName,
        serviceId: this.reactiveForm.value.service,
        quantity: this.reactiveForm.value.quantity,
        clientId: Number(this.categoryType.clientId),
        history: 1,
      };
      // console.log("EDIT Number= "+ this.categoryType.Id);

      const id1 = Number(this.categoryType.Id);
      // console.log("Work on Patching="+JSON.stringify(this.reactiveForm.value.service));
      // console.log('Work on  Edit Save=' + JSON.stringify(data1));
    
      this.jobSev.update(id1, data1).subscribe(() => {});
    }
    // this.srvcLst();

    this.activeModal.close('ok');
  }
}
