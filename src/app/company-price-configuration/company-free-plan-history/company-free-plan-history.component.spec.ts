import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFreePlanHistoryComponent } from './company-free-plan-history.component';

describe('CompanyFreePlanHistoryComponent', () => {
  let component: CompanyFreePlanHistoryComponent;
  let fixture: ComponentFixture<CompanyFreePlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFreePlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFreePlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
