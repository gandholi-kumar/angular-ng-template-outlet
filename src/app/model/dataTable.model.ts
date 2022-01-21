import { ElementRef } from '@angular/core';

export interface TableColumnConfiguration {
  identifier: string;
  label: string;
  componentType: ComponentType;
  isVisible: boolean;
  isEditable?: boolean;
  width?: number;
}

export enum ComponentType {
  TEXTBOX = 'textbox',
  LINK = 'link',
  OPTIONS = 'options',
  TEMPLATEREF = 'templateRef',
}

export interface TableDataConfiguration {
  header: string | ElementRef;
  content: string;
  meatballMenu?: boolean;
  url?: TableURL;
}

export interface TableURL {
  label: string;
  urlHref: string;
}
