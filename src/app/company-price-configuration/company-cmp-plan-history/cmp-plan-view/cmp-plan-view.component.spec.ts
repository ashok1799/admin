import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPlanViewComponent } from './cmp-plan-view.component';

describe('CmpPlanViewComponent', () => {
  let component: CmpPlanViewComponent;
  let fixture: ComponentFixture<CmpPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
