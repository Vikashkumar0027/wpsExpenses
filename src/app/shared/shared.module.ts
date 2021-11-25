import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ViewComponent } from './view/view.component';
import { AddEditServiceComponent } from './add-edit-service/add-edit-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlertComponent,
    ViewComponent,
    AddEditServiceComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ]
})
export class SharedModule { }
