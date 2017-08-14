import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPlanAssociatecompanyComponent } from './cmp-plan-associatecompany.component';

describe('CmpPlanAssociatecompanyComponent', () => {
  let component: CmpPlanAssociatecompanyComponent;
  let fixture: ComponentFixture<CmpPlanAssociatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPlanAssociatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPlanAssociatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
