import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})

// Structural diretive worki opposite of ngIf 
//Set is used so that when ever variable's true/false value change, this direcive is called
export class StructuralDirectiveDirective {
  @Input() set appStructuralDirective(condition : boolean){
    if(!condition){ //Display the data if condition is value
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{ //Hides dayta if condition is false
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef) { }

}
