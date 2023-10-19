import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[EnrollService] we can also do it in the app.module since all are depended on it
})
export class AppComponent {
  title = 'SubscribeService';

  constructor(private enrollService:EnrollService){


  }
}
