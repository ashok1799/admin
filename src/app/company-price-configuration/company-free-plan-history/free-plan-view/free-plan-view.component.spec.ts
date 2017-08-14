import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePlanViewComponent } from './free-plan-view.component';

describe('FreePlanViewComponent', () => {
  let component: FreePlanViewComponent;
  let fixture: ComponentFixture<FreePlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreePlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
