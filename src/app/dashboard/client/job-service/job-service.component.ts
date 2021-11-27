import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';
import { AddEditServiceComponent } from 'src/app/shared/add-edit-service/add-edit-service.component';

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

  constructor(
    private httpS: ServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal
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
        this.listService();
      },
      (reason) => {}
    );

    this.category = type;
    this.categoryId = id;
  }
}
