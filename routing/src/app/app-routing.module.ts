import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { CourseGuardService } from './Services/course-guard.services';
import { CanDeactivateGuardService } from './Services/candeactivate-guard.service';
import { CourseResolveService } from './Services/course-resolve.service';





const appRoute:Routes =[  //Route is an array
  {path:"Home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Contact",canDeactivate:[CanDeactivateGuardService],component:ContactComponent},
  {path:"Courses",component:CoursesComponent,resolve:{courses:CourseResolveService}}, 
  
  // CourseGuardService is implemting canActivate,{path:"Courses",component:CoursesComponent,canActivate:[CourseGuardService]}
  //{path:'Courses/Course/:id',component:CourseComponent}, //"Courses/Course/:id/name",  can add more parameters
 {path:"Courses",canActivateChild:[CourseGuardService],children:[{path:'Course/:id',component:CourseComponent}]}, //i can add many child path
  {path:"**",component:ErrorComponent} //this should be the last path because the **  matches all routes and it will print it 
]


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoute,{enableTracing:true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { 

}
