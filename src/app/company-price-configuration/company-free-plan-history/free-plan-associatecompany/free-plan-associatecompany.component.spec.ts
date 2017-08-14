import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePlanAssociatecompanyComponent } from './free-plan-associatecompany.component';

describe('FreePlanAssociatecompanyComponent', () => {
  let component: FreePlanAssociatecompanyComponent;
  let fixture: ComponentFixture<FreePlanAssociatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreePlanAssociatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePlanAssociatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
