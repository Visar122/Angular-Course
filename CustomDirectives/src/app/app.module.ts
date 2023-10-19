import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{setbackgrounDirective} from'./CustomDirective/setbackground.directive'
import { AppComponent } from './app.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './CustomDirective/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    setbackgrounDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
