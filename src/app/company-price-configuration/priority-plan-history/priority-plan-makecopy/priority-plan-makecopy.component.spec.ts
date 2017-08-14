import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPlanMakecopyComponent } from './priority-plan-makecopy.component';

describe('PriorityPlanMakecopyComponent', () => {
  let component: PriorityPlanMakecopyComponent;
  let fixture: ComponentFixture<PriorityPlanMakecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPlanMakecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPlanMakecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
