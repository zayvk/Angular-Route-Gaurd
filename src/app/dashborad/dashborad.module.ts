import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboardHomeComponent } from './dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

@NgModule({
  declarations: [DashboardHomeComponent, SuperDuperComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule
  ]
})
export class DashboradModule { }
