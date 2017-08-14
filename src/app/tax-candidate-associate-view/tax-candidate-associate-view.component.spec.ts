import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCandidateAssociateViewComponent } from './tax-candidate-associate-view.component';

describe('TaxCandidateAssociateViewComponent', () => {
  let component: TaxCandidateAssociateViewComponent;
  let fixture: ComponentFixture<TaxCandidateAssociateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCandidateAssociateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCandidateAssociateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
