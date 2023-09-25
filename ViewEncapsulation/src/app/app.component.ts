import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None   //None means this will be applied to all the child elements aswell fx button  i can also put it on style.css
})
export class AppComponent {
  title = 'ViewEncapsulation';
}
