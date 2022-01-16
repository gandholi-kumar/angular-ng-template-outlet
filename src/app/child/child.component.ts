import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TableDataConfiguration } from '../model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() customTemplate: TemplateRef<HTMLElement>;
  @Input() template: TemplateRef<HTMLElement>;
  @Input() rowData: TableDataConfiguration[];
  constructor() {}

  ngOnInit() {}
}
