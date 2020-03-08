import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})

// Structural diretive worki opposite of ngIf 
export class StructuralDirectiveDirective {
  @Input() set appStructuralDirective(condition : boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef) { }

}
