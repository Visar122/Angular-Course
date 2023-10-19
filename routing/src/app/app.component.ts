import { Component } from '@angular/core';
import { Course } from './course service';
import { Team } from './team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Course,Team]
})
export class AppComponent {
  title = 'Routing';

  constructor(private course:Course, private team:Team){
    
  }
}
