import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilsContactComponent } from './detils-contact.component';

describe('DetilsContactComponent', () => {
  let component: DetilsContactComponent;
  let fixture: ComponentFixture<DetilsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetilsContactComponent]
    });
    fixture = TestBed.createComponent(DetilsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
