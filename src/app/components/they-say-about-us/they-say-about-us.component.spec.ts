import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheySayAboutUsComponent } from './they-say-about-us.component';

describe('TheySayAboutUsComponent', () => {
  let component: TheySayAboutUsComponent;
  let fixture: ComponentFixture<TheySayAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheySayAboutUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheySayAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
