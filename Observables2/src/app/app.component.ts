import { Component, OnInit } from '@angular/core';
import { Observable,from,of,interval } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Observables2';

  CounterObservable = interval(1000);  //interval creates an observable

   Unsub:any;

  ngOnInit(){
   
   /* this.Unsub=this.CounterObservable.subscribe((value) => {  //now if we not unsubscribe to the data the observable will keep emitting to 1000 and we will lose track to our memory 
      console.log(value);
     });
    */
   

  }
  unsubscribe(){
    this.Unsub.unsubscribe()
      
  }
  subscribe(){
    this.Unsub= this.CounterObservable.subscribe((event)=>{  //so now when i click  the subscribe button it starts to emit like it did there but if i click unsubscribe it stops just like up
      console.log(event);
    });
  }
}
