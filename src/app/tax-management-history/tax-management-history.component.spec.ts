import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxManagementHistoryComponent } from './tax-management-history.component';

describe('TaxManagementHistoryComponent', () => {
  let component: TaxManagementHistoryComponent;
  let fixture: ComponentFixture<TaxManagementHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxManagementHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxManagementHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
