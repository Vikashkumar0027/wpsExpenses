import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobhistoryService } from 'src/app/services/jobhistory.service';

@Component({
  selector: 'app-jobhistory',
  templateUrl: './jobhistory.component.html',
  styleUrls: ['./jobhistory.component.css']
})
export class JobhistoryComponent implements OnInit {
@Input() categoryType:any;
histLst:any[]=[];
delatelsts:any[]=[];
  constructor(private activeModal:NgbActiveModal, private jobHistoryS:JobhistoryService) { }

  ngOnInit(): void {
   this.historyData();
  //  console.log( JSON.stringify(this.categoryType));
  }
  historyData(){
    this.jobHistoryS.historyLst().subscribe((res)=>{
      this.histLst=res;
      const id=Number(this.categoryType.Id);
      this.delatelsts=this.histLst.filter((c)=> c.jobId === id);
   
     });
  }
  currentData(){

  }
  modalClose() {
    this.activeModal.close('Cancel');
  }
  okey(){
console.log("history id="+this.categoryType.Id);

 
  



    this.activeModal.close('ok');
  
  }

}
