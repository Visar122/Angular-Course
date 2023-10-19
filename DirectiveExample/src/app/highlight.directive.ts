import { Conditional } from '@angular/compiler';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {


   }
   @Input()set appHighlight(condtion:boolean){  //When i use set i can use a property like a method
        
    if(condtion){           //Im chechkign if the conditon is try than the class gets highligheted so  the conditon i put on html need to be true
      this.renderer.addClass(this.element.nativeElement,'higlight')
    }
   }        

}
