import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPlanHistoryComponent } from './priority-plan-history.component';

describe('PriorityPlanHistoryComponent', () => {
  let component: PriorityPlanHistoryComponent;
  let fixture: ComponentFixture<PriorityPlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
