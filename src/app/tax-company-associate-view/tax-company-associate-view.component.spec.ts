import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCompanyAssociateViewComponent } from './tax-company-associate-view.component';

describe('TaxCompanyAssociateViewComponent', () => {
  let component: TaxCompanyAssociateViewComponent;
  let fixture: ComponentFixture<TaxCompanyAssociateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCompanyAssociateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCompanyAssociateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
