import { Component } from '@angular/core';
import { userService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userService]
})
export class AppComponent {
  title = 'UserDetail';

  constructor(private userservice:userService){

  }
}
