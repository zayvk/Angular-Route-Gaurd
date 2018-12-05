import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardHomeComponent
  },
  {
    path:'superduper',
    component: SuperDuperComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
