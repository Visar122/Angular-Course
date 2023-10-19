import { Component, OnInit } from '@angular/core';
import { Observable, of,from } from 'rxjs';  //need to do this
import { map,filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Observables';

/*   myObservable=new Observable((observer)=> {
  
    console.log('Observable starts')

  setTimeout(()=>{observer.next("A")},1000)                                    //just adding a time to the observable
  setTimeout(()=>{observer.next("B")},2000)                                    //they will be emitted after every 1 second
  //setTimeout(()=>{observer.error(new Error('Something Wrong! Try again'))},3000)  //once the error is printed 4,5 dosen't get printed
 
  setTimeout(()=>{  observer.next("C")},4000)  
  setTimeout(()=>{  observer.next("D")},5000)  
  setTimeout(()=>{  observer.complete()},5000)  //also complete if data comes after it or i make the complete 3 seconds the other wont be emited or added
    
/* observer.next("1")
   observer.next("2")             first it was made like this but i wanted a timer
   observer.next("3")
   observer.next("4")
   observer.next("5") 
  }); */




  array1= [1,2,3,4];
  array2=['A','B','C','D'];

  // --of Operator--
  //myObservable= of(this.array1,this.array2,20,57,'Hello');  //the off aperator displayes also thee aler complete,  as u can see it puts the array as it is not fx numb 1 then 2 
  
    // --from--
     // from does what of dosen't it printrs the array 1 them 2 then 3,and from accepts only 1 argument not like of where u can put many
  // I can multiply the array with 5 so i will get 5,10,15,20 using  pipe(map) map is an operator and an operator is a function,and it needs to be imported
     myObservable=from(this.array1).pipe(map((value)=>{
      return value*5;
     }),filter((value)=> {
       return value>=6;
      }));
     
     // -- pipe(map(value))=> --
     //now the value will store the array so 1,2,3,4
   /*   transformObs= this.myObservable.pipe(map((value)=>{
     
     return value * 5;

    }),filter((value)=>{return value >=6 }))//can put the filter like this so it is much easier */
    


    // --filter--
    /*  filterObs=this.transformObs.pipe(filter((value)=>{
      return value >= 6     //only 3 match this condition    ,the this.filterObs.subscribe still takes my map obs             
    })) */


  ngOnInit(){ 
    this.myObservable.subscribe(    //if im going to use observales  without adding them into a same one  then i need to give them a value name and put it on like myObservable
      (value)=>{ console.log(value);
      },

    (error)=>{alert(error.message);
    }, ()=>{
      alert('Observatatiom has completed emitting all values')
    });

  }
}
 