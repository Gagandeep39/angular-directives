import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';

  constructor(private elementRef : ElementRef) { }

  @HostListener("mouseenter") highlightData(event: Event) {
    this.backgroundColor = 'lightyellow';
  }
  @HostListener("mouseleave") removehighlightData(event: Event) {
    this.backgroundColor = 'transparent';
  }

}
