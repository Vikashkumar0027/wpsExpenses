import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { FormsModule } from '@angular/forms';
import { JobNameListingComponent } from './job-name-listing/job-name-listing.component';



@NgModule({
  declarations: [
    JobComponent,JobNameListingComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class JobSModule { }
