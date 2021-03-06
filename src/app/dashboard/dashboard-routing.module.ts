import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/login.guard';
import { AddEditCatogaryComponent } from './add-edit-catogary/add-edit-catogary.component';
import { CatogaryListComponent } from './catogary-list/catogary-list.component';
import { ClientComponent } from './client/client.component';
import { JobServiceComponent } from './client/job-service/job-service.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { DashboardComponent } from './dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ClientListingComponent } from './invoice-module/client-listing/client-listing.component';
import { ViewClientListComponent } from './invoice-module/view-client-list/view-client-list.component';
import { JobComponent } from './job-s/job/job.component';

const routes: Routes = [
  {
    path: 'app',
    canActivate: [LoginGuard],component: DashboardComponent,
    children: [
      { path: 'categoryList', component: CatogaryListComponent },
      { path: 'expenseList', component: ExpenseListComponent },   
      {path:'client', component:ClientComponent},
      {path:'client/view/:id',component:ViewClientComponent},
      {path:'client/view/:id/jobs',component:JobServiceComponent},

      {path:'job', component:JobComponent},
      {path:'clientListing',component:ClientListingComponent},
      {path:'clientListing/view', component:ViewClientListComponent},
    ],
  },
  // {path:'expense',component:CatogaryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
