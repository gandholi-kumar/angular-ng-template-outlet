import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  DisplayMode,
  DisplayOptions,
  TableColumnConfiguration,
  TableDataConfiguration,
} from '../model';
import { ComponentType } from '../model/dataTable.model';

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

  mode = DisplayOptions.TABLE;
  modeOptions: DisplayMode[] = [
    { mode: DisplayOptions.CARD },
    { mode: DisplayOptions.LIST },
    { mode: DisplayOptions.TABLE },
  ];

  columns: TableColumnConfiguration[] = [
    {
      identifier: 'header',
      label: 'Title',
      componentType: ComponentType.TEXTBOX,
      isEditable: false,
      isVisible: true,
    },
    {
      identifier: 'content',
      label: 'Sub title',
      componentType: ComponentType.TEXTBOX,
      isEditable: false,
      isVisible: true,
    },
    {
      identifier: 'url',
      label: 'External link',
      componentType: ComponentType.LINK,
      isVisible: true,
    },
    {
      identifier: 'meatballMenu',
      label: 'MeatBall menu',
      componentType: ComponentType.OPTIONS,
      isVisible: true,
    },
  ];

  rowDatas: TableDataConfiguration[] = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals',
      url: {
        label: 'google',
        urlHref: 'https://www.google.com/'
      },
      meatballMenu: true,
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript',
      
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core',
      
    },
    {
      header: 'Vue',
      content: '',
      meatballMenu: true,
    },
  ];

  get selectedTemplate() {
    if (this.mode === DisplayOptions.LIST) return this.listTemplate;
    else if (this.mode === DisplayOptions.TABLE) return this.tableTemplate;
    return this.cardTemplate;
  }

  public onMenuClick(rowData: TableDataConfiguration) {
    console.log('parent menu data: ', rowData);
    alert(JSON.stringify(rowData));
  }
}
