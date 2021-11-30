import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatogaryListComponent } from './catogary-list/catogary-list.component';
import { AddEditCatogaryComponent } from './add-edit-catogary/add-edit-catogary.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';
import { ClientComponent } from './client/client.component';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { JobServiceComponent } from './client/job-service/job-service.component';
import { JobSModule } from './job-s/job-s.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    SidebarComponent,
    CatogaryListComponent,
    AddEditCatogaryComponent,
    ExpenseListComponent,
    AddEditExpenseComponent,
    ClientComponent,
    AddEditClientComponent,
    ViewClientComponent,
    JobServiceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,ReactiveFormsModule,FormsModule,JobSModule
  ]
})
export class DashboardModule { }
