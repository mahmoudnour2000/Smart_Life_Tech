/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmartHomesPageComponent } from './smart-homes-page.component';

describe('SmartHomesPageComponent', () => {
  let component: SmartHomesPageComponent;
  let fixture: ComponentFixture<SmartHomesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartHomesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHomesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
