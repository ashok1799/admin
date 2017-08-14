import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompaniesPlanEditComponent } from './company-companies-plan-edit.component';

describe('CompanyCompaniesPlanEditComponent', () => {
  let component: CompanyCompaniesPlanEditComponent;
  let fixture: ComponentFixture<CompanyCompaniesPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCompaniesPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCompaniesPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
