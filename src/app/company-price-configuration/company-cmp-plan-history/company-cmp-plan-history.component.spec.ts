import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCmpPlanHistoryComponent } from './company-cmp-plan-history.component';

describe('CompanyCmpPlanHistoryComponent', () => {
  let component: CompanyCmpPlanHistoryComponent;
  let fixture: ComponentFixture<CompanyCmpPlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCmpPlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCmpPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
