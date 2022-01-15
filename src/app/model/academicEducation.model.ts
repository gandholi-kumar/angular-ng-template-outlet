export interface Courses {
  header: string,
  content: string
}

export interface DisplayMode {
  mode: DisplayOptions
}

export enum DisplayOptions {
  CARD = 'card',
  LIST = 'list',
  TABLE = 'table'
}