import { Component, OnInit } from '@angular/core';
import { Course } from '../Services/course service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private course:Course){

  }

  Courses:{id:number;name:string,author:string,duration:number,type:string,price:number;ratings:number,image:string,description:string}[]=[];

  ngOnInit(){
    this.Courses=this.course.courses.filter(course=>course.type==='Premium')

  }

}
