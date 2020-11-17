import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  view2Value: number = 22;

  constructor(value:ValueService) {
    this.view2Value = value.getValue();
    this.sayHello(); 
  }

  private sayHello() {
    console.log('Hello, View2Component component has been created');
    console.log(this.view2Value);
  }

  ngOnInit(): void {
  }

}
