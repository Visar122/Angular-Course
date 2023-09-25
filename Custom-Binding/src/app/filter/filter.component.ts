import { Component,EventEmitter,Input, Output } from '@angular/core';
;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
                       


 @Input() all:number=0;  //now this all property  is an input property which means it can recive data from the parent component course
 @Input() free:number =0;
 @Input() premium:number=0;

selectedRadioButtonValue:string='All'; //Now the button  will be selected with all course or the button all course will be selected

  @Output()                          //Eventemitter creates an custom event and we need to use Output,and EventEmitter and Output must be imported 
filterRadioButtonSelectionChanged:EventEmitter <string> =new EventEmitter<string> //basically Whenever a selction  happens this event gets used by the method

//Now i must create a method to use this event

OnRadioButtonSelectionChanged(){       //now the EventEmitter will change the value like vent if the user clics it
this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
//  console.log(this.selectedRadioButtonValue) //Testing if the value of selected changes
}
}
