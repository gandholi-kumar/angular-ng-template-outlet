import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Courses } from '../model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() customTemplate: TemplateRef<HTMLElement>;
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  @Input() items: Courses[];
  constructor() {}

  ngOnInit() {}
}
