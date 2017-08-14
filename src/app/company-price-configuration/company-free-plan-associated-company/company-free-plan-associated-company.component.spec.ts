import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFreePlanAssociatedCompanyComponent } from './company-free-plan-associated-company.component';

describe('CompanyFreePlanAssociatedCompanyComponent', () => {
  let component: CompanyFreePlanAssociatedCompanyComponent;
  let fixture: ComponentFixture<CompanyFreePlanAssociatedCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFreePlanAssociatedCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFreePlanAssociatedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
