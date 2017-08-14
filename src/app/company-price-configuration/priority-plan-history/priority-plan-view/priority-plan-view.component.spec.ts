import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPlanViewComponent } from './priority-plan-view.component';

describe('PriorityPlanViewComponent', () => {
  let component: PriorityPlanViewComponent;
  let fixture: ComponentFixture<PriorityPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
