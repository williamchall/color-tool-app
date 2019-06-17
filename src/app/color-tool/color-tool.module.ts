import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { UnorderedListComponent } from './components/unordered-list/unordered-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToolHeaderComponent, UnorderedListComponent, ColorFormComponent],
  exports: [ToolHeaderComponent, UnorderedListComponent, ColorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ColorToolModule {
  colorOutput: string;
  console.log(  colorOutput)
  
   setName(colorOutput: string) {
    console.log('colorOutput', colorOutput)
    //this.colorOutput = colorOutput;
  }
 }
