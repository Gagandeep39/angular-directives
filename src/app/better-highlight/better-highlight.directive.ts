import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "lightgreen"
    );
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") highlightData(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "lightblue"
    );
  }
  @HostListener("mouseleave") removeHighlight(event: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "lightgreen"
    );
  }
}
