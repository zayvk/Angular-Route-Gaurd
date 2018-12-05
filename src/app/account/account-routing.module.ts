import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home.component';

const routes: Routes = [
  {
    path:'',
    component: AccountHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
