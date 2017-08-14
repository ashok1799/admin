import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywagePlanAssociatecompanyComponent } from './dailywage-plan-associatecompany.component';

describe('DailywagePlanAssociatecompanyComponent', () => {
  let component: DailywagePlanAssociatecompanyComponent;
  let fixture: ComponentFixture<DailywagePlanAssociatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywagePlanAssociatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywagePlanAssociatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
