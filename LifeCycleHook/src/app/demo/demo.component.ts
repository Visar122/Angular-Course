import { Component,Input,OnChanges,OnInit, SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck{

  @Input() value:string='procademy';

  constructor(){
    console.log('constructor called ')
    console.log(this.value)
  }
  ngOnChanges(change: SimpleChanges) {
    console.log('Onchanges called')
    console.log(change)
      
  }
  ngOnInit(){
    console.log('Oninti called')
    console.log(this.value)
  }
  ngDoCheck(){

  }
}

