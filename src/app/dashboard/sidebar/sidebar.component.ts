import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/services/login-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // @ViewChild('closebutton') closebutton:any;

 
   
  constructor( ) {}

  ngOnInit(): void {
  }
 

}
