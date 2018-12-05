import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home.component';
import { AuthGuard } from '../auth/gaurd/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: AccountHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
