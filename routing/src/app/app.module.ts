import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Course } from './Services/course service';
import { CourseGuardService } from './Services/course-guard.services';
import { AuthService } from './Services/auth.service';
import { Team } from './Services/team.service';
import { CanDeactivateGuardService } from './Services/candeactivate-guard.service';
import { CourseResolveService } from './Services/course-resolve.service';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  

 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Course,CourseGuardService,AuthService,Team,CanDeactivateGuardService,CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
