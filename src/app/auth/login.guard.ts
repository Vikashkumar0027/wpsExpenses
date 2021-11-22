import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const getArrayValue = sessionStorage.getItem('submitted');
    const myId1= JSON.parse(getArrayValue || '{}');

    if(myId1===true){
      return true;
    // localStorage.removeItem('submitted');
  }else{
    return  this.router.navigate([""]);
  }
}

}