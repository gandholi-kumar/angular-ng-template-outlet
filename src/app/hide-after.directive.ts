import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);

    setTimeout(() => {
      this.viewContainerRef.clear();
    }, 5000);
  }
}
