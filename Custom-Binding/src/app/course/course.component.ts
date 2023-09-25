import { Target } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
 courses=[ 
  {id:101, name:'JavaScript for beginners',author:'John heikela', duration:48, type:'Free',
  price:0.00, ratings:3.5, image:'assets/Java.jpg',
  description:'På dette kursus lærer du det grundlæggende i JavaScript. Dette kursus er udelukkende designet til begyndere'
},
 
  {id:102, name:'Angular for beginners',author:'Mark heikela', duration:28, type:'Premium',
  price:129.00, ratings:4.5, image:'assets/angular.jpg',
  description:'På dette kursus vil du lære det grundlæggende i Angular. Dette kursus er udelukkende designet til begyndere'
},

{id:103, name:'React Course  for beginners',author:'Mark Vought', duration:18.5, type:'Free',
price:0.00, ratings:4.0, image:'assets/react.jpg',
description:'På dette kursus lærer du det grundlæggende i React. Dette kursus er udelukkende designet til begyndere'
},

{id:104, name:'Advance Angular Course',author:'Steve Smith', duration:19.5, type:'Premium',
price:145.00, ratings:4.8, image:'assets/advanced-angular.jpg',
description:'På dette kursus vil du lære alle begreber af Angular. Dette kursus er udelukkende designet til begyndere'
},
{id:105, name:' Html & Css Course for Beginners ',author:'John heikela', duration:18, type:'Free',
price:80.00, ratings:5.0, image:'assets/Html.jpg',
description:'På dette kursus vil du lære HTML og Css. Dette kursus er primært udelukkende designet til begyndere'
},


{id:106, name:'C Sharp  Course For Beginners',author:'John heikela', duration:88, type:'Free',
price:0.00, ratings:5.0, image:'assets/Csharp.jpg',
description:'På dette kursus vil du lære Angular with Net Core. Dette kursus er udelukkende designet til begyndere'
},

{id:107, name:'Database Course For Begginers ',author:'Steve Smith', duration:18, type:'Free',
price:0.00, ratings:4.5, image:'assets/Sql.jpg',
description:'På dette kursus vil du lære Angular with Net Core. Dette kursus er udelukkende designet til begyndere'
},

{id:108, name:'Advanced C Sharp Course ',author:'John heikela', duration:98, type:'Premium',
price:180.00, ratings:5.0, image:'assets/advancedcsharp.jpg',
description:'På dette kursus vil du lære begreberne C sharp. Dette kursus er udelukkende designet til begyndere'
},

{id:109, name:'Advance JavaScript Course',author:'John heikela', duration:460, type:'Premium',
price:150.00, ratings:3.5, image:'assets/Java.jpg',
description:'På dette kursus vil du lære JavaScript-begreber. Dette kursus er udelukkende designet til begyndere'
},



 ]

 getTotalCourses(){
  return this.courses.length;
 }

 getTotalFreeCourses(){
   return this.courses.filter(course => course.type ==='Free').length;//This filter method will filter  this method if the condition is true basically it will print all the free courses  
   // (course =>course.type==='Free) 
 }

 getTotalPremiumCourses(){
  return this.courses.filter(course=> course.type === 'Premium').length;  // the filter will returns an array wiht premium corsues just like with free courses 
 }

 CourseCountRadioButton:string='All';

 SearchText:string= ' ';


 OnFilterRadioButtonChanged(data:string){
  
  this.CourseCountRadioButton = data;  //This data will recive All  if the user selects it or  free or premium
  console.log(this.CourseCountRadioButton)  //Now im doing th same thing as in filter component but in course
 }
 


 onSearchText(SearchValue:string){

  this.SearchText=SearchValue;
  console.log(this.SearchText);
 }

}
