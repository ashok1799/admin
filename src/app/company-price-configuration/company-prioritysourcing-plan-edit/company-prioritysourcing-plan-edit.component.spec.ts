import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPrioritysourcingPlanEditComponent } from './company-prioritysourcing-plan-edit.component';

describe('CompanyPrioritysourcingPlanEditComponent', () => {
  let component: CompanyPrioritysourcingPlanEditComponent;
  let fixture: ComponentFixture<CompanyPrioritysourcingPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPrioritysourcingPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPrioritysourcingPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
