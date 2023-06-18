import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HtmlSanitizerPipe } from './pipe/html-sanitizer.pipe';
import { HideAfterDirective } from './hide-after.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    DataTableComponent,
    HtmlSanitizerPipe,
    HideAfterDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
