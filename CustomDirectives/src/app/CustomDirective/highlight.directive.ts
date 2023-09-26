import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {      //ng g directive Name  or ng g d

  constructor(private element:ElementRef,private renderer:Renderer2) { //Renderer2 is a class which allows us to manipulate the dom elements without accessing the dome directly
                                                                        //private is made so i can acess the properties outside of the constructor dx the ngOninit

   }  
   ngOnInit(){
     this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#F1948A');
     this.renderer.addClass(this.element.nativeElement,'container'); //here im putting the thing into the class container without the thing being in that class
     this.renderer.setAttribute(this.element.nativeElement, 'title' , 'This is exapmle div');
   }

}
