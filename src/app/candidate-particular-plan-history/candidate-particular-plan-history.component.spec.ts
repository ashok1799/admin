/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CandidateParticularPlanHistoryComponent } from './candidate-particular-plan-history.component';

describe('CandidateParticularPlanHistoryComponent', () => {
  let component: CandidateParticularPlanHistoryComponent;
  let fixture: ComponentFixture<CandidateParticularPlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateParticularPlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateParticularPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
