import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';
import { AddEditServiceComponent } from 'src/app/shared/add-edit-service/add-edit-service.component';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-job-service',
  templateUrl: './job-service.component.html',
  styleUrls: ['./job-service.component.css'],
})
export class JobServiceComponent implements OnInit {
  list: any[] = [];
  lists: any[] = [];
  nodata: boolean = true;
  category: any;
  categoryId: any;
  @ViewChild(AddEditServiceComponent) serviceModalComponent: AddEditServiceComponent | undefined;
  constructor(
    private httpS: ServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
  
  ) {}

  ngOnInit(): void {
    // console.log("JOb Service ID ="+ this.route.snapshot.paramMap.get('id'))
    this.listService();
    

  }

  listService() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpS.serviceList().subscribe((res) => {
      this.list = res;
      this.lists = this.list.filter((c) => c.clientId === id);
      // console.log("jhdfsjsbvhvbjh"+this.list.find(c => c.clientId === id))
      // console.log(res[0].id);
      // if(res[0].id===1){ //its for (job service) No Data found Message
      //   // alert("ka ho vikash");
      //   this.nodata=false;
      // }
    });
  }

  openModal(type: any, id: any): void {
    const activeModal = this.modalService.open(AddEditServiceComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });
    const clid = Number(this.route.snapshot.paramMap.get('id'));
    const detail = { type: type, Id: id, clientId: clid };
    activeModal.componentInstance.categoryType = detail;
    activeModal.result.then(
      (result) => {
        if(result === "ok"){
        this.listService();
        }
      },
      (reason) => {}
    );

    this.category = type;
    this.categoryId = id;
    
  }
  serviceDel(id:any){
    // console.log("IDDDDDIIII "+id)
    const activeModal = this.modalService.open(AlertComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    //data transfer to child
    const contentObj = {
      heading: 'Delete JOb-Service List!',
      message: 'Are you sure to Delate it?.',
      cancel: 'No',
      ok: 'Yes'
    }
    activeModal.componentInstance.modalContent = contentObj;
    activeModal.result.then(
      (result) => {
      //data get from child inside the result
        console.log("Result="+result);
        // alert("hello vikas");
      
        if (result === 'delete') {
          this.httpS.delete(id).subscribe(res=>{
            this.listService();
          })
        }
      },
      (reason) => {}
    );
  }
}
