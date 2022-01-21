import { TemplateRef } from '@angular/core';

export interface TableColumnConfiguration {
  identifier: string;
  label: string;
  componentType: ComponentType;
  isVisible: boolean;
  isEditable?: boolean;
  width?: number;
  customCellTemplate?: TemplateRef<any>;
}

export enum ComponentType {
  TEXTBOX = 'textbox',
  LINK = 'link',
  OPTIONS = 'options',
  TEMPLATEREF = 'templateRef',
}

export interface TableDataConfiguration {
  header: string;
  content: string;
  actions?: boolean;
  url?: TableURL;
}

export interface TableURL {
  label: string;
  urlHref: string;
}
