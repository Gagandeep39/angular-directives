import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { HostbindingHighlightDirective } from './hostbinding-highlight/hostbinding-highlight.directive';
import { ParameterizedHighlightDirective } from './parameterized-highlight/parameterized-highlight.directive';
import { StructuralDirectiveDirective } from './structural-directive/structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostbindingHighlightDirective,
    ParameterizedHighlightDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
