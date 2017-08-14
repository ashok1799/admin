/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PriceCandidatesAllComponent } from './price-candidates-all.component';

describe('PriceCandidatesAllComponent', () => {
  let component: PriceCandidatesAllComponent;
  let fixture: ComponentFixture<PriceCandidatesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCandidatesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCandidatesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
