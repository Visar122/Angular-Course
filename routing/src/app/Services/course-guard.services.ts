import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()   //because i am injecting a class AuthService inside of this class 
export class CourseGuardService implements CanActivate{

    constructor(private authService:AuthService,private router:Router){

    }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if(this.authService.isAuthenticated()){
        return true;
      }else{
        this.router.navigate (['']);
        return false;
      }
   }
}