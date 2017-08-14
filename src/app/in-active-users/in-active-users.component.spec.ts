/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InActiveUsersComponent } from './in-active-users.component';

describe('InActiveUsersComponent', () => {
  let component: InActiveUsersComponent;
  let fixture: ComponentFixture<InActiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
