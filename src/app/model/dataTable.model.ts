export interface TableColumnConfiguration {
  identifier: string;
  label: string
  componentType: ComponentType;
  isVisible: boolean;
  isEditable?: boolean;
  width?: number
}

export enum ComponentType {
  TEXTBOX = 'textbox',
  LINK = 'link',
  OPTIONS = 'options'
}

export interface TableDataConfiguration {
  header: string;
  content: string;
  meatballMenu?: boolean
}
