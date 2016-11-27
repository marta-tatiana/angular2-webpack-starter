import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, OnChanges {

  @Input() someModel;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
