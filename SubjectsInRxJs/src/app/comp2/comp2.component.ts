import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
constructor(private dataservice:DataService){}
// now we just subscribe to it 
ngOnInit(){
  this.dataservice.dataEmitter.subscribe((value)=>{   //inside the value we recive the event or value which the named class or property in this case dataEmitter gets 
    this.EnteredText=value;
  })
}

  EnteredText:string='';

}
