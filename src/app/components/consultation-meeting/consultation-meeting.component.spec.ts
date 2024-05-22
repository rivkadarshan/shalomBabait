import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationMeetingComponent } from './consultation-meeting.component';

describe('ConsultationMeetingComponent', () => {
  let component: ConsultationMeetingComponent;
  let fixture: ComponentFixture<ConsultationMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationMeetingComponent]
    });
    fixture = TestBed.createComponent(ConsultationMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
