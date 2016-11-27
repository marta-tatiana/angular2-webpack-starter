import {Component, Input} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div>
      <span>{{label}}:{{value}}</span>
    </div>
  `
})
export class ChildComponent {

  @Input() label: string;
  @Input() value: string[] | string;

  constructor() {
    console.log('Value is ' + this.value);
  }

}
