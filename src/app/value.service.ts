import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  public myValue: number = 0;

  constructor() { 
    this.sayHello(); 
  }

  sayHello() {
    console.log('Hello, ValueService service has been created.');
  }

  public getValue() {
    return this.myValue;
  }  
  
  public setValue(newValue: number) {
    if(Number.isInteger(newValue) && newValue >= 0 && newValue <= 100) {
      this.myValue = newValue;
      console.log(`ValueService - Value updated: ${newValue}`);
    }
    else {
      console.log('ValueService - Invalid value entered: ' + newValue);
    }
  }  
}
