import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';
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
  clntList:any[]=[];
  clntdata:any;
  nodata:boolean=true;
  category:any;
  categoryId:any
  constructor(private httpS:ServiceService,private clientS:ClientService ,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    // console.log( window.location.href);
    // this.clientLst();
    const ID= Number(this.route.snapshot.paramMap.get('id'));
    if(ID >= 1){
    this.clientS.catoList().subscribe((res)=>{
      this.clntList=res; 
      this.clndata(); 
    });
  
    }
    
    
    this.listService();
   
  }
  // clientLst(){
  //   const ID= Number(this.route.snapshot.paramMap.get('id'));
  //   if(ID >= 1){
  //   this.clientS.catoList().subscribe((res)=>{
  //     this.clntList=res;  
  //   });
    
  //   //  console.log("IIIDDDD"+ID);
  //     // this.clntdata=this.clntList.find( c => c.id===ID);
  //     // console.log(this.clntdata.Name);
  //   }
  // }
  clndata(){
    const ID= Number(this.route.snapshot.paramMap.get('id'));
    this.clntdata=this.clntList.find( c => c.id===ID);
    // console.log(this.clntdata.Name);
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

  
    // jobService(){
    //   const id= Number(this.route.snapshot.paramMap.get('id'));
    //   this.router.navigate(['app/client/view',id,'jobs']);
    // }

}
