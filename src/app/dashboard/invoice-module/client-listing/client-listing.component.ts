import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.css']
})
export class ClientListingComponent implements OnInit {
 clientFList:any[]=[];
 clientSList:any[]=[];
 serviceFList:any[]=[];
 serviceSList:any[]=[];
  constructor(private router:Router,private clientServ:ClientService,
    private serviceS:ServiceService) { }

  ngOnInit(): void {
    this.listing();
    this. serviceListing();
  }
  viewClient(){
    this.router.navigate(['app/clientListing/view']);
  }
  listing(){

    this.clientServ.catoList().subscribe((res)=>{
      this.clientFList=res;
     this.clientSList=this.clientFList.filter((r)=>r.id)
        //  console.log("this clientSList=="+JSON.stringify(this.clientSList));

    });
  }
  serviceListing(){
    this.serviceS.serviceList().subscribe((res)=>{
      this.serviceFList=res;
      console.log("this clientSList=="+JSON.stringify( this.serviceFList));
    })
  }

}
