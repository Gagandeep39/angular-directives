import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appParameterizedHighlight]'
})
export class ParameterizedHighlightDirective {
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  constructor() { }

  @HostListener('mouseenter') addHighlight(event : Event){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') removeHighlight(event : Event){
    this.backgroundColor = this.defaultColor;
  }

}
