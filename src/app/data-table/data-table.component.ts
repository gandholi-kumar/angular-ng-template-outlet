import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumnConfiguration, TableDataConfiguration } from '../model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() columns: TableColumnConfiguration[];
  @Input() rowDatas: TableDataConfiguration[];
  @Output() menuClick: EventEmitter<TableDataConfiguration> =
    new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log('DataTableComponent', this.columns);
  }

  onMenuClick(rowData: TableDataConfiguration) {
    this.menuClick.emit(rowData);
  }
}
