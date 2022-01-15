import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Courses, DisplayOptions } from '../model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @ViewChild('cardTemplate', { static: true })
  cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate', { static: true })
  listTemplate: TemplateRef<HTMLElement>;
  @ViewChild('tableTemplate', { static: true })
  tableTemplate: TemplateRef<HTMLElement>;

  mode = DisplayOptions.LIST;
  modeOptions = [{ mode: DisplayOptions.CARD }, { mode: DisplayOptions.LIST }, { mode: DisplayOptions.TABLE }];
  cols = [{ field: 'header', header: 'Title' }, { field: 'content', header: 'Sub title' }];


  items: Courses[] = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals',
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript',
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core',
    },
  ];

  get selectedTemplate() {
    if (this.mode === DisplayOptions.LIST) return this.listTemplate;
    else if (this.mode === DisplayOptions.TABLE) return this.tableTemplate;
    return this.cardTemplate;
  }
}
