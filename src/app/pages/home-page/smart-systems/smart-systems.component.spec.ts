/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmartSystemsComponent } from './smart-systems.component';

describe('SmartSystemsComponent', () => {
  let component: SmartSystemsComponent;
  let fixture: ComponentFixture<SmartSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
