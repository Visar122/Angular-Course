import { Component, OnInit } from '@angular/core';
import { Student } from './Student/student';
import { StudentService } from './Student/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularPipes';
  students!:Student[];
  totalMarks!:number;

  constructor(private studentService:StudentService){}

  ngOnInit(){
    this.students=this.studentService.students;
    this.totalMarks=this.studentService.totalMarks;

  }
}
