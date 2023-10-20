import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "../contact/contact.component";
import { Observable } from "rxjs";
export interface IdeactivateComponent{                                    ///wxport makes it possible for other components to use this interface or class
  
    CanExit:() => Observable<boolean>|Promise<boolean>|boolean; //this method returns  an Observable of boolean value,or a promsie of boolean value or a boolean
}
export class CanDeactivateGuardService implements CanDeactivate<IdeactivateComponent>{  //instead of CanDeactivate<ContactComponent> we use now the interface
    canDeactivate(component:IdeactivateComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot){//it takes 4 properties
      
    
       return component.CanExit();
    }

}