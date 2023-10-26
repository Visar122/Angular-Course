import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "./course service";

@Injectable()
    

export class CourseResolveService implements Resolve<any>{ //  now i add the courseReslove to providers in  appmodule
    constructor(private courseService:Course){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.courseService.GetAllCourses().then((data: any)=>{
           return data;
        })
    }
 

}