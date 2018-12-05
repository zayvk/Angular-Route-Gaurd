import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { DashboradModule } from './dashborad/dashborad.module';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'account',
    loadChildren: () => AccountModule
  },
  {
    path:'dashboard',
    loadChildren: () => DashboradModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
