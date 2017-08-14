import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFreePlanEditComponent } from './company-free-plan-edit.component';

describe('CompanyFreePlanEditComponent', () => {
  let component: CompanyFreePlanEditComponent;
  let fixture: ComponentFixture<CompanyFreePlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFreePlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFreePlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
