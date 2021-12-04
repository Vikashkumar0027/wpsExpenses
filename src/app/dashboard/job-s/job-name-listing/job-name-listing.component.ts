import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { stringify } from 'querystring';
import { JobListingService } from 'src/app/services/job-listing.service';
import { JobhistoryService } from 'src/app/services/jobhistory.service';
import { AddEditJoblistingComponent } from 'src/app/shared/add-edit-joblisting/add-edit-joblisting.component';
import { JobhistoryComponent } from 'src/app/shared/jobhistory/jobhistory.component';

@Component({
  selector: 'app-job-name-listing',
  templateUrl: './job-name-listing.component.html',
  styleUrls: ['./job-name-listing.component.css'],
})
export class JobNameListingComponent implements OnInit, OnChanges {
  list: any[] = [];
  joblsts: any[] = [];
  historyFullList: any[] = [];
  history: any[] = [];
  ti: number = 1;
  constructor(
    private modalService: NgbModal,
    private jolstService: JobListingService,
    private jobHistoryS: JobhistoryService
  ) {}
  @Input() jobId: any; //get id of job which will be client id to math in modal service option

  ngOnChanges() {
    this.jobLst();
    this.historyBtttonHidse();
  }
  historyBtttonHidse() {
    this.jobHistoryS.historyLst().subscribe((res) => {
      this.historyFullList = res;
    });
  }

  ngOnInit(): void {
    // console.log("id pass"+this.jobId)
    //this.jobLst();
  }
  jobLst() {
    this.jolstService.jobsList().subscribe((res) => {
      this.list = res;
      const idi = Number(this.jobId);
      this.joblsts = this.list.filter((c) => c.clientId === idi);
    });
  }

  openModal(type: any, id: any): void {
    
    const activeModal = this.modalService.open(AddEditJoblistingComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });

    const detail = { type: type, Id: id, clientId:this.jobId};
    activeModal.componentInstance.categoryType = detail;
    activeModal.result.then(
      (result) => {
        if (result === 'ok') {
          this.jobLst();
        }
      },
      (reason) => {}
    );
    // this.category = type;
    // this.categoryId = id;
  }

  historyModal(id: any) {
    console.log('History Id= ' + id);
    const activeModal = this.modalService.open(JobhistoryComponent, {
      size: '',
      backdrop: 'static',
      keyboard: false,
    });

    const current = this.joblsts.find((c) => c.id === id);
    // console.log( JSON.stringify(current));

    const modetail = { Id: id, type: 'History of job' };

    const detail = Object.assign(current, modetail);

    activeModal.componentInstance.categoryType = detail;
    activeModal.result.then(
      (result) => {
        if (result === 'ok') {
          // this.jobLst();
        }
      },
      (reason) => {}
    );
  }
}
