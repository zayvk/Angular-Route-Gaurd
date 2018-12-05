import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

  
  constructor(private auth:AuthService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //redirect and return false
    if (!this.auth.isSuperAdmin) {
      this.router.navigate([''])
      return false;
    }
      return true;
  }
}
