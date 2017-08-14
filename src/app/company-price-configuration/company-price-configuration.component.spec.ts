import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPriceConfigurationComponent } from './company-price-configuration.component';

describe('CompanyPriceConfigurationComponent', () => {
  let component: CompanyPriceConfigurationComponent;
  let fixture: ComponentFixture<CompanyPriceConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPriceConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPriceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
