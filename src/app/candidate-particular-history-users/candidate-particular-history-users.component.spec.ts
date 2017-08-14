import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateParticularHistoryUsersComponent } from './candidate-particular-history-users.component';

describe('CandidateParticularHistoryUsersComponent', () => {
  let component: CandidateParticularHistoryUsersComponent;
  let fixture: ComponentFixture<CandidateParticularHistoryUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateParticularHistoryUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateParticularHistoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
