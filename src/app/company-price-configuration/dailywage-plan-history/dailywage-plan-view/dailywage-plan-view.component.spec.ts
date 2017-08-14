import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywagePlanViewComponent } from './dailywage-plan-view.component';

describe('DailywagePlanViewComponent', () => {
  let component: DailywagePlanViewComponent;
  let fixture: ComponentFixture<DailywagePlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywagePlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywagePlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
