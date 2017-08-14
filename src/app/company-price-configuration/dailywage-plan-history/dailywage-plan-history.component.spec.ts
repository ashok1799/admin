import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywagePlanHistoryComponent } from './dailywage-plan-history.component';

describe('DailywagePlanHistoryComponent', () => {
  let component: DailywagePlanHistoryComponent;
  let fixture: ComponentFixture<DailywagePlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywagePlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywagePlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
