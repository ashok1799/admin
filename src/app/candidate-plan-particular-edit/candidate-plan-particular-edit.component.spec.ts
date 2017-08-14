/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CandidatePlanParticularEditComponent } from './candidate-plan-particular-edit.component';

describe('CandidatePlanParticularEditComponent', () => {
  let component: CandidatePlanParticularEditComponent;
  let fixture: ComponentFixture<CandidatePlanParticularEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePlanParticularEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePlanParticularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
