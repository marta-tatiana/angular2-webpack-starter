import {By} from '@angular/platform-browser';
import {async, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ParentComponent} from './parent.component';

let fixture;
let component: ParentComponent;
let element: HTMLElement;


describe('ParentComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      providers: [
      ],
      declarations: [
        ParentComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ParentComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  it('should display correct model data', (() => {
    component.someModel = { value : '01234'};
    fixture.detectChanges();
    let modelValue = fixture.debugElement.query(By.css('.for-tests-markup'));
    // let modelValue = fixture.nativeElement.querySelector('.for-tests-markup');
    expect(modelValue).toBe('01234');
  }));


});
