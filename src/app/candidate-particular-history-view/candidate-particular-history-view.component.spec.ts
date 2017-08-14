import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateParticularHistoryViewComponent } from './candidate-particular-history-view.component';

describe('CandidateParticularHistoryViewComponent', () => {
  let component: CandidateParticularHistoryViewComponent;
  let fixture: ComponentFixture<CandidateParticularHistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateParticularHistoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateParticularHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
