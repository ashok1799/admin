/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InactiveUserParticularViewComponent } from './inactive-user-particular-view.component';

describe('InactiveUserParticularViewComponent', () => {
  let component: InactiveUserParticularViewComponent;
  let fixture: ComponentFixture<InactiveUserParticularViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveUserParticularViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveUserParticularViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
