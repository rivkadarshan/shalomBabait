import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfActivitiesComponent } from './list-of-activities.component';

describe('ListOfActivitiesComponent', () => {
  let component: ListOfActivitiesComponent;
  let fixture: ComponentFixture<ListOfActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
