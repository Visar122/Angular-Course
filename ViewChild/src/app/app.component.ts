import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';


  @ViewChild('Dobinput') DateOfBirth!: ElementRef;
  @ViewChild('ageinput') age!:ElementRef;


  @ViewChild(DemoComponent,{static:true}) democomp!:DemoComponent; //And this is how u use a childcomponent inside a parent component using viewChild ,im taking the demo component inside app component

  calculateAge(){
    let birthYear =new Date(this.DateOfBirth.nativeElement.value).getFullYear();  //u can see  in the console that the input is nativeElement and value is the value that the user selects
     //and the date object up,is going to return new date based on the value 
    let currentYear=new Date().getFullYear();  //this returns the current year 
    let theage = currentYear - birthYear;
   
    this.age.nativeElement.value=theage; //this gets shown inside the age input and the method happens only when i click out of the inputs because of blur method

    //console.log(this.DateOfBirth);
   // console.log(this.age);  //u can se that their input element is  ElementRef

   //se by using View Cild we can  acess html element in ts component 
  }
}
