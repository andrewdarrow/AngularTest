import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor() { 
    this.sayHello(); 
  }

  private sayHello() {
    console.log('Hello, View2Component component has been created');
  }

  ngOnInit(): void {
  }

}
