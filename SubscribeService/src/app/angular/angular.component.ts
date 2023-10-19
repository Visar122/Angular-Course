import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers:[EnrollService]
})
export class AngularComponent {
 title='Angular';

 constructor(private enrollService:EnrollService){

 }


 
 OnEnroll(){

  this.enrollService.onEnrollClicked(this.title);  //here we call the method and just like  we made the method to return a tile:string i need to to put the string
}

/* OnEnroll() {  
    alert('Thank you for enrolling to ' + this.title +' course') } 
 */
}
