import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('appHideAfter')
  delay: number;

  @Input('appHideAfterElse')
  defaultTemplate: TemplateRef<any> | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);

    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.defaultTemplate) {
        this.viewContainerRef.createEmbeddedView(this.defaultTemplate);
      }
    }, this.delay);
  }
}
