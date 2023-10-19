import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {
 //also Done it in  class.directive.ts much more easier and simpler

   }
   //Here i made an alias  so app class is an alias so i can just use [ngClass] in html instead of 
   @Input() set display(value:Object) {                                  //we put a condition set , now i can use display as a method
        
    let entries=Object.entries(value)
    console.log(entries); // U can see that an array has been logged with  entries ,so entries method has returned an array 
    
    //we loop over entry array
    for(let [className,condition] of entries){
      if(condition){                 //we set the style on th element, className is  the first div in the array  so is container,and container is change-font
        this.renderer.addClass(this.element.nativeElement,className)  //and we add the class so we ad container and the css from container is added to the div
      }
    }

   } 
}
