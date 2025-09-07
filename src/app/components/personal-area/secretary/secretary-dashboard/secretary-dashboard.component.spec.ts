import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryDashboardComponent } from './secretary-dashboard.component';

describe('SecretaryDashboardComponent', () => {
  let component: SecretaryDashboardComponent;
  let fixture: ComponentFixture<SecretaryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretaryDashboardComponent]
    });
    fixture = TestBed.createComponent(SecretaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
