import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDailywagePlanEditComponent } from './company-dailywage-plan-edit.component';

describe('CompanyDailywagePlanEditComponent', () => {
  let component: CompanyDailywagePlanEditComponent;
  let fixture: ComponentFixture<CompanyDailywagePlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDailywagePlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDailywagePlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
