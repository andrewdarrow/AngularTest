import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  view1Value: number = 11; // Initialize to unique value for debugging purposes

  constructor(private valueService: ValueService) {
    this.view1Value = this.valueService.getValue();
    this.sayHello(); 
  }

  private sayHello() {
    console.log(this.constructor.name + ' component has been created with an initial value of ' + this.view1Value);
  }

  public onSliderChange(event: MatSliderChange) {
    console.log('****************************************');
    console.log('MatSliderChange, new value: ' + event.value);
    console.log('Two-way binding check on view1Value: ' + this.view1Value);
    this.valueService.setValue(this.view1Value);
  }

  ngOnInit(): void {
  }

}

