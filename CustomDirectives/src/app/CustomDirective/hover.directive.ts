import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  // i want to make it possible when the uses hover or touches the div the padding and the margin to be increased 

  constructor(private element:ElementRef,private renderer:Renderer2) {
                

   }
   //To make the  method possible i need to add HostListener in order for the thing to work
   @HostListener('mouseenter') onMouseHover(){   //Hostlistener is listening to the mouseenter event and executing the  on MouseHober method  and the Host is the div which we use it on 
      this.renderer.setStyle(this.element.nativeElement,'margin','5px 10px');
      this.renderer.setStyle(this.element.nativeElement,'padding','10px 10px');
      this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
      
    }

//To make it go backt to it original size i just made  a new method or Hostlistener where i copied  the margin and padding from the app.componnent.css
    @HostListener('mouseleave') onMouseOut(){//Hostlistener is listening to the mouseleave event and executing the  on MouseHober method  and the Host is the div which we use it on the event name matters 
      this.renderer.setStyle(this.element.nativeElement,'margin','10px 20px ');
      this.renderer.setStyle(this.element.nativeElement,'padding','0px 20px');
      this.renderer.setStyle(this.element.nativeElement,'transition','0.5s'); 
      
    }
}
