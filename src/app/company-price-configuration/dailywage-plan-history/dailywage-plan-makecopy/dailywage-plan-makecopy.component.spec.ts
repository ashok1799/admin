import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywagePlanMakecopyComponent } from './dailywage-plan-makecopy.component';

describe('DailywagePlanMakecopyComponent', () => {
  let component: DailywagePlanMakecopyComponent;
  let fixture: ComponentFixture<DailywagePlanMakecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywagePlanMakecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywagePlanMakecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
