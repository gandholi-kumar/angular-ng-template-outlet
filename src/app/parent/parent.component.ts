import { Component, TemplateRef, ViewChild } from '@angular/core';
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
  @ViewChild('titleTemplate', { static: true })
  titleTemplate: TemplateRef<HTMLElement>;
  @ViewChild('linkTemplate', { static: true })
  linkTemplate: TemplateRef<HTMLElement>;

  mode = DisplayOptions.TABLE;
  modeOptions: DisplayMode[] = [
    { mode: DisplayOptions.CARD },
    { mode: DisplayOptions.LIST },
    { mode: DisplayOptions.TABLE },
  ];
  columns: TableColumnConfiguration[] = [];
  rowDatas: TableDataConfiguration[] = [];

  get selectedTemplate() {
    if (this.mode === DisplayOptions.LIST) return this.listTemplate;
    else if (this.mode === DisplayOptions.TABLE) return this.tableTemplate;
    return this.cardTemplate;
  }

  public onMenuClick(rowData: TableDataConfiguration) {
    console.log('parent menu data: ', rowData);
    alert(JSON.stringify(rowData));
  }

  ngOnInit() {
    this.columns = [
      {
        identifier: 'header',
        label: 'Title',
        componentType: ComponentType.TEMPLATEREF,
        isEditable: false,
        isVisible: true,
        customCellTemplate: this.titleTemplate,
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
        componentType: ComponentType.TEMPLATEREF,
        isVisible: true,
        customCellTemplate: this.linkTemplate,
      },
      {
        identifier: 'actions',
        label: 'Actions',
        componentType: ComponentType.OPTIONS,
        isVisible: true,
      },
    ];

    this.rowDatas = [
      {
        header: 'Angular',
        content: 'Angular is a development platform, built on TypeScript',
        url: {
          label: 'Angular',
          urlHref: 'https://angular.io/guide/what-is-angular',
        },
        actions: true,
      },
      {
        header: 'React',
        content: 'React is a JavaScript library for building user interfaces.',
        url: {
          label: 'React',
          urlHref: 'https://reactjs.org/docs/getting-started.html',
        },
        actions: true,
      },
      {
        header: 'Svelte',
        content: 'Svelte converts your app into ideal JavaScript at build time',
        url: {
          label: 'Svelte',
          urlHref: 'https://svelte.dev/docs',
        },
        actions: true,
      },
      {
        header: 'Vue',
        content: 'Vue is a progressive framework for building user interfaces',

        actions: true,
      },
    ];
  }

  public getEyebrowData(input: string) {
    const value = input.toLowerCase();
    if (value.includes('ang')) {
      return 'This is angular';
    } else if (value.includes('rea')) {
      return 'This is react';
    } else {
      return 'We are developing';
    }
  }
}
