import { Component, OnInit } from '@angular/core';
import { Course } from '../Services/course service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  constructor(private course:Course,private activatedRoute:ActivatedRoute,private route:ActivatedRoute){}//The ActivatedRoute service, on the other hand, is used to access information about the route

  course2:{id:number,name:string,author:string,duration:number,type:string,price:number;ratings:number,image:string,description:string}[]=[];

  ngOnInit(){
  
     //this.course2=this.course.courses
      //this method is returning a promise so we use then method , and then takes a call back funtiom
/*     this.course.GetAllCourses().then((data:any)=>{     
       
      this.course2=data;
    }) */
    this.course2=this.route.snapshot.data['courses']; //courses is the property from appmodulets that ive made with resolve
  }
}
