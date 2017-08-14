import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPlanAssociatecompanyComponent } from './priority-plan-associatecompany.component';

describe('PriorityPlanAssociatecompanyComponent', () => {
  let component: PriorityPlanAssociatecompanyComponent;
  let fixture: ComponentFixture<PriorityPlanAssociatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPlanAssociatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPlanAssociatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
