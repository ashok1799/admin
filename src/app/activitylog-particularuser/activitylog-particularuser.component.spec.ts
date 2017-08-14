import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitylogParticularuserComponent } from './activitylog-particularuser.component';

describe('ActivitylogParticularuserComponent', () => {
  let component: ActivitylogParticularuserComponent;
  let fixture: ComponentFixture<ActivitylogParticularuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitylogParticularuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitylogParticularuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
