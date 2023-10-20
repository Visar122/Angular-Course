import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild , Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()   //because i am injecting a class AuthService inside of this class 
export class CourseGuardService implements CanActivateChild,CanActivate{

    constructor(private authService:AuthService,private router:Router){

    }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if(this.authService.isAuthenticated()){
        alert('You have got acess to details'); 
        return true;
      }else{
        alert('You must login to get acess to details');
        this.router.navigate (['']);
        return false;
      }
   }
   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.authService.isAuthenticated()){
      
      alert('You have got acess to details')
           
      return true;
    }else{
      alert('You must login to get  acess to details')
      this.router.navigate(['']); 
      return false;
    }
    
       
   }
}