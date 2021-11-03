import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddCatogaryComponent } from './add-catogary/add-catogary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AddCatogaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminModule, NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
