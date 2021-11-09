import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatogaryListComponent } from './catogary-list/catogary-list.component';
import { AddEditCatogaryComponent } from './add-edit-catogary/add-edit-catogary.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    SidebarComponent,
    CatogaryListComponent,
    AddEditCatogaryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class DashboardModule { }