import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateParticularHistoryMakecopyComponent } from './candidate-particular-history-makecopy.component';

describe('CandidateParticularHistoryMakecopyComponent', () => {
  let component: CandidateParticularHistoryMakecopyComponent;
  let fixture: ComponentFixture<CandidateParticularHistoryMakecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateParticularHistoryMakecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateParticularHistoryMakecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
