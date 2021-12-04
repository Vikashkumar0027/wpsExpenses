import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { ViewClientListComponent } from './view-client-list/view-client-list.component';



@NgModule({
  declarations: [
    ClientListingComponent,
    ViewClientListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModuleModule { }
