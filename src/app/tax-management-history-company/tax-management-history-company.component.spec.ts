import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxManagementHistoryCompanyComponent } from './tax-management-history-company.component';

describe('TaxManagementHistoryCompanyComponent', () => {
  let component: TaxManagementHistoryCompanyComponent;
  let fixture: ComponentFixture<TaxManagementHistoryCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxManagementHistoryCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxManagementHistoryCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
