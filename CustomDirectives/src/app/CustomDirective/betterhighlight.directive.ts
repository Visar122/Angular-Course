import { Directive, ElementRef, HostBinding, HostListener, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 


  }
   @Input() deafaultColor:string='transparent';
   @Input() highlightColor:string='pink';                       //CustomBinding  new code 
   
   @Input() thetitle:string='';

  @HostBinding('style.backgroundColor')background:string=this.deafaultColor;   // @HostBinding('style.backgroundColor')background:string='transparent';
  @HostBinding('style.border')border:string='none';
  @HostBinding('style.title')title:string='title'

  ngOnInit(){
    this.background=this.deafaultColor;  //this is so by changing the color in html yellow gets showen first instead of transparent
    
  }
  @HostListener ('mouseenter') mouseEnter(){ 
    this.background=this.highlightColor                                    //  this.background='pink' 
    this.border='red 2px solid' 
    this.title=this.thetitle
  }
  @HostListener ('mouseleave') mouseLeave(){

    this.background=this.deafaultColor                       //  this.background='transparent'
    this.border='none'
}
}
