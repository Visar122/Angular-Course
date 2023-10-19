import { Component, OnInit } from '@angular/core';
import { Course } from '../course service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private course:Course){}

  course2:{name:string,author:string,duration:number,type:string,price:number;ratings:number,image:string,description:string}[]=[];

  ngOnInit(){
  
     this.course2=this.course.courses

  }
}
