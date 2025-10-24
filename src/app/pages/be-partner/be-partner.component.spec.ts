/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BePartnerComponent } from './be-partner.component';

describe('BePartnerComponent', () => {
  let component: BePartnerComponent;
  let fixture: ComponentFixture<BePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
