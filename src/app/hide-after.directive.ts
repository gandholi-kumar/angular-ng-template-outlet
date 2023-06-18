import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  constructor(private con) {}
  ngOnInit(): void {
    
  }
}
