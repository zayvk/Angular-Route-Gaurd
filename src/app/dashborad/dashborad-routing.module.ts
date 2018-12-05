import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { AdminGuard } from '../auth/gaurd/admin.guard';

const routes: Routes = [
  {
    path:'',
    component: DashboardHomeComponent,
    children:[{
      path:'superduper',
      component: SuperDuperComponent,
      canActivateChild:[AdminGuard]
    }],  
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
