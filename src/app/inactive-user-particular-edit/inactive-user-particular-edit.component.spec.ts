/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InactiveUserParticularEditComponent } from './inactive-user-particular-edit.component';

describe('InactiveUserParticularEditComponent', () => {
  let component: InactiveUserParticularEditComponent;
  let fixture: ComponentFixture<InactiveUserParticularEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveUserParticularEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveUserParticularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
