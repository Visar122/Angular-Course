import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 
  constructor(private dataservice:DataService){}
  ngOnInit(){

  }

   InputText:string='';
 
   EntBtnClick(){
   // console.log(this.EnteredText);  now instead of printing it just in the console we going to print it in the page 

   this.dataservice.RaiseDataEmitter(this.InputText);
   }
 
   OnEnter(inputElement: HTMLInputElement) {
    // Check if Enter was pressed while the input field is focused
    if (document.activeElement === inputElement) {
      this.EntBtnClick();
    }
  }
    
}
