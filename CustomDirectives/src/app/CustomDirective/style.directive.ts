import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {


   }
  @Input('appStyle') set setStyle(styles:Object){      //Im going to get object properties from the properties [setStyle]=" {backgroundColor:'pink',color:'white'}"

   let entries=Object.entries(styles)
   //console.log(entries);                                  //to see whast the array contains and it contains ,array [0] contains  {backgroundColor:'pink',  array [1]color:'white'

   for(let entry of entries){
    this.renderer.setStyle(this.element.nativeElement,entry[0],entry[1])      
                                                              
                                                       //i wantto change the style which i use in html  when i use [setStyle] so i use renderer
   }
  }
}
