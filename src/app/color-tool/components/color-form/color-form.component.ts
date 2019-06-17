import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl  } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  color = new FormControl('');
  @Output() colorOutput: EventEmitter<any> = new EventEmitter();
  constructor() { 
  }

  ngOnInit() {
  }
  addColor() {
    console.log(this.color.value);
    this.colorOutput.emit(this.color.value);
  }
}
