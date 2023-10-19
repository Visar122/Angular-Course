import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';  //..  i starten fordi den er en folder

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
 //providers:[EnrollService] we do this in app component so all the child component get it so i dont have to do this everytime   const enrollService=new EnrollService();    
})
export class JavascriptComponent {

  title='JavaScript';
  
  constructor(private enrollService:EnrollService){

  }

  OnEnroll(){
   
   
    this.enrollService.onEnrollClicked(this.title);  //here we call the method and just like  we made the method to return a tile:string i need to to put the string
  }

  //service is useful so  i dont have to write the text welcome to angular ....... evry time we can just add the class 
  
}
