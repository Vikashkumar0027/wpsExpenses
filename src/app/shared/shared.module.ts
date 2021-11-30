import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ViewComponent } from './view/view.component';
import { AddEditServiceComponent } from './add-edit-service/add-edit-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditJoblistingComponent } from './add-edit-joblisting/add-edit-joblisting.component';
import { JobhistoryComponent } from './jobhistory/jobhistory.component';



@NgModule({
  declarations: [
    AlertComponent,
    ViewComponent,
    AddEditServiceComponent,
    AddEditJoblistingComponent,
    JobhistoryComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ]
})
export class SharedModule { }
