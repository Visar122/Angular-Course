import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{setbackgrounDirective} from'./CustomDirective/setbackground.directive'
import { AppComponent } from './app.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    setbackgrounDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
