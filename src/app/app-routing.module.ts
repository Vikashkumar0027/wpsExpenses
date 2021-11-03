import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatogaryComponent } from './add-catogary/add-catogary.component';
import { AuthgurdLoginGuard } from './admin/login/authgurd-login.guard';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:"catogary", component:AddCatogaryComponent},
  {path:"dashbord",canActivate:[AuthgurdLoginGuard], component:DashbordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
