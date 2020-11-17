import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
   myValue: number = 0;

  constructor() { 
    this.sayHello(); 
  }

  private sayHello() {
    console.log('Hello, ValueService service has been created');
  }

  private getValue() {
    return this.myValue;
  }  
  
  private setValue(newValue: number) {
    if(Number.isInteger(newValue) && newValue >= 0 && newValue <= 100) {
      this.myValue = newValue;
    }
    else {
      console.log('Invalid value entered.');
    }
  }  
}
