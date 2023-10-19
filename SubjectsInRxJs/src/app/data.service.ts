import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService{

   //dataEmitter=new EventEmitter <string>();  we can get the same thing using subject 
   dataEmitter=new Subject<string>();    //<string>  in comp 1 the raiseDataEmitter takes a string

   RaiseDataEmitter(data:string){
    //this.dataEmitter.emit(data); and instead of emit we use next
    this.dataEmitter.next(data);
   }
}