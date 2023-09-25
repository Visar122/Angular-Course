import { AfterContentInit, Component, ContentChild,ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit,AfterContentInit{
 
  ngOnInit(): void {
      console.log(this.paragraphEl);
  }
  ngAfterContentInit(): void {
    this.paragraphEl.nativeElement.TextContent='This is a new paragraph value'
      console.log(this.paragraphEl.nativeElement.TextContent);
  }

  @ContentChild('paragraph') paragraphEl!:ElementRef;


}
