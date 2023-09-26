import { Directive, ElementRef, OnInit } from "@angular/core";

 @Directive({
    selector:'[setBackground]'
})
export class setbackgrounDirective implements OnInit{         // Since i want to use this class somere else i need to put export
    
    constructor(private element:ElementRef){
 
    //element.nativeElement.style.backgroundColor='#C8E6C9';    //can also write it like this and elemant dosen't need to be private 
    
    this.element=element;
  }
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='#C8E6C9';
  }
 
}     