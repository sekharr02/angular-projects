import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaignmentComponent } from './assaignment.component';

describe('AssaignmentComponent', () => {
  let component: AssaignmentComponent;
  let fixture: ComponentFixture<AssaignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssaignmentComponent]
    });
    fixture = TestBed.createComponent(AssaignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
