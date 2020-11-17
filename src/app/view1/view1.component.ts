import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor() { 
    this.sayHello(); 
  }

  private sayHello() {
    console.log('Hello, View1Component component has been created');
  }

  ngOnInit(): void {
  }

}
