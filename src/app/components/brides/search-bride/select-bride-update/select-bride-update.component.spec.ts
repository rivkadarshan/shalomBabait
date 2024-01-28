import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBrideUpdateComponent } from './select-bride-update.component';

describe('SelectBrideUpdateComponent', () => {
  let component: SelectBrideUpdateComponent;
  let fixture: ComponentFixture<SelectBrideUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBrideUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBrideUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
