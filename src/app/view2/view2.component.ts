import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  view2Value: number = 22; // Initialize to unique value for debugging purposes

  constructor(value:ValueService) {
    this.view2Value = value.getValue();
    this.sayHello(); 
  }

  private sayHello() {
    console.log(this.constructor.name + ' component has been created with an initial value of ' + this.view2Value);
  }

  ngOnInit(): void {
  }

}
