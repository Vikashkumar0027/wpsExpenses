import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobList:any[]=[];
  id:any
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.catoList().subscribe((res)=>{
      this.jobList=res;
    })
  }
  getData(val:any){
    console.log(val);
    this.id=val;
  }

}
