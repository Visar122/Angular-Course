import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/Services/course service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private course:Course,private activatedRoute:ActivatedRoute,private router:Router){ //ActivatedRoute helps you get that link or url so you can use it in your code to get the id .

  }
  CourseId:any;
 Courses:any;

 RouteParaObs:any;
 EditMode:boolean=false;
  


  ngOnInit(){ 

    //this.CourseId=this.activatedRoute.snapshot.params["id"]; 
    //this.CourseId=this.activatedRoute.snapshot.paramMap.get('id');//using snap  shot we are taking the id form the route that we have put
    //this.Courses=this.course.courses.find(x=>x.id==this.CourseId);  //and then we are selecteing the id detail from course ,now n this Courses  we will have a course based on the id
  
   //snap shot is only used when the code dosnen't change lets say now i want to add a go to first coruse link i use observables os the id changes inside the course component  
     
   //this adds the id to url so /Course/Courses/101
    this.RouteParaObs=this.activatedRoute.paramMap.subscribe((param)=>{
    this.CourseId=param.get('id');//param gets the  id  "/courses/103", the "103" is a route parameter, and you can access it using paramMap.
    this.Courses=this.course.courses.find(x=>x.id ==this.CourseId)//this looks for the course with that number 
    });

   //ActivatedRoute helps you get that link or url so you can add a event or edit there .

   //this adds the edit to url so /Course/Courses/edit:false
   this.activatedRoute.queryParamMap.subscribe((param)=>{
    this.EditMode=Boolean(param.get('edit'));
   })
   
}//this makes the edit to url so /Course/Courses/edit:true
Appendqueryparam(){
  this.router.navigate(['/Courses/Course',this.CourseId],{queryParams:{edit:true}});
 }
}