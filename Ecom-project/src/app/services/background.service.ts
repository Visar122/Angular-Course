import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgroundImageSubject=new BehaviorSubject<string>('/assets/default-background.jpg');
  currentBackgroudnImage=this.backgroundImageSubject.asObservable();

  setBackground(imageUrl:string){
    this.backgroundImageSubject.next(imageUrl)
  }

  constructor() { }
}
