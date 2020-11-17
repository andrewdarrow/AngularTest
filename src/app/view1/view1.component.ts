import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  view1Value: number = 11;

  constructor(value:ValueService) {
    this.view1Value = value.getValue();
    this.sayHello(); 
  }

  private sayHello() {
    console.log('Hello, View1Component component has been created');
    console.log(this.view1Value);
  }

  ngOnInit(): void {
  }

}
