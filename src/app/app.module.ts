import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
