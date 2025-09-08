import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeNumbersComponent } from './we-numbers.component';

describe('WeNumbersComponent', () => {
  let component: WeNumbersComponent;
  let fixture: ComponentFixture<WeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
