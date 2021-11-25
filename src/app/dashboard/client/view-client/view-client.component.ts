import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';
import { AddEditServiceComponent } from 'src/app/shared/add-edit-service/add-edit-service.component';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  @ViewChild(AddEditServiceComponent) addeditExModal:AddEditServiceComponent | undefined;
  list:any[]=[];
  nodata:boolean=true;
  category:any;
  categoryId:any
  constructor(private httpS:ServiceService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.listService();
   
  }
    listService(){
this.httpS.serviceList().subscribe((res)=>{
    this.list=res;
    // console.log(res[0].id);
    if(res[0].id===1){
      // alert("ka ho vikash");
      this.nodata=false;
    }
})
    }

    openModal(type:any,id:any): void {
      const activeModal = this.modalService.open(AddEditServiceComponent, {
        size: '',
        backdrop: 'static',
        keyboard: false,
      });
      const detail={type:type,Id:id};
      activeModal.componentInstance.categoryType=detail;
      activeModal.result.then(
        (result) => {
       this.listService();           
        },
        (reason) => {}
      );
     
      this.category = type;
      this.categoryId = id;
    }
}
