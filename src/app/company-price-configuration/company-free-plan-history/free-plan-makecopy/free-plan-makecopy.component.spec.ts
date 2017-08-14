import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePlanMakecopyComponent } from './free-plan-makecopy.component';

describe('FreePlanMakecopyComponent', () => {
  let component: FreePlanMakecopyComponent;
  let fixture: ComponentFixture<FreePlanMakecopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreePlanMakecopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePlanMakecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
