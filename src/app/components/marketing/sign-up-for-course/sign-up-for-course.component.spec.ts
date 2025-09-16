import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpForCourseComponent } from './sign-up-for-course.component';

describe('SignUpForCourseComponent', () => {
  let component: SignUpForCourseComponent;
  let fixture: ComponentFixture<SignUpForCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpForCourseComponent]
    });
    fixture = TestBed.createComponent(SignUpForCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
