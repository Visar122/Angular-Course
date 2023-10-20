import { Component } from '@angular/core';
import { IdeactivateComponent } from '../Services/candeactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IdeactivateComponent{   //i just implement the method here
                                                              //now i can use this candeactivate-guard.service.tc on every component by simply  impelementing IdeactivateComponent interface  
  FirstName:string='';
  LastName:string='';
  Country:string='';
  Subject:string='';
  constructor(){

  }

  CanExit(){
    if(this.FirstName||this.LastName||this.Subject){ //is means if the first name has a value or if the firstname is empty string it will not work
    return confirm('You have unsaved changes. Do you want to discard these changes'); //if the user clicks ok it will confirm will be tru if returns cancel it will return false
    }else{
      return true;
    }
  }
}
