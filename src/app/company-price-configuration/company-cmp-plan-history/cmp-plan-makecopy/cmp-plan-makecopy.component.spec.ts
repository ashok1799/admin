import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPlanMakecopyComponent } from './cmp-plan-makecopy.component';

describe('CmpPlanMakecopyComponent', () => {
  let component: CmpPlanMakecopyComponent;
  let fixture: ComponentFixture<CmpPlanMakecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPlanMakecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPlanMakecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
