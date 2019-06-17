import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ColorToolModule} from './color-tool/color-tool.module'
import {ToolHeaderComponent} from '../app/color-tool/components/tool-header/tool-header.component';
import { UnorderedListComponent } from './color-tool/components/unordered-list/unordered-list.component';
import { ColorFormComponent } from './color-tool/components/color-form/color-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolHeaderComponent,
    UnorderedListComponent,
    ColorFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
