import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  view2Value: number = 22; // Initialize to unique value for debugging purposes

  constructor(private valueService: ValueService) {
    this.view2Value = this.valueService.getValue();
    this.sayHello(); 
  }

  private sayHello() {
    console.log(this.constructor.name + ' component has been created with an initial value of ' + this.view2Value);
  }

  public OnInputChange(event: any) {
    if(this.view2Value) {
      console.log('****************************************');
      console.log('MatInput change, new value: ' + event.value); // TO DO: Figure out why this isn't working
      console.log('Two-way binding check on view2Value: ' + this.view2Value);
      this.valueService.setValue(this.view2Value);
    }
    else {
      console.log('Cannot set value to null.');
    }
  }

  ngOnInit(): void {
  }

}
