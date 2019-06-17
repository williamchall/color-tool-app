import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit {
  @Input() headerText: string='change me';
  constructor() {
    console.log('headerText:  ' + this.headerText);
   }

  ngOnInit() {
  }

}
