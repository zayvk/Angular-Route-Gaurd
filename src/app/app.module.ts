import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/gaurd/auth.guard';
import { AdminGuard } from './auth/gaurd/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
