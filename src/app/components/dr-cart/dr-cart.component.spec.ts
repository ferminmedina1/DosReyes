import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrCartComponent } from './dr-cart.component';

describe('DrCartComponent', () => {
  let component: DrCartComponent;
  let fixture: ComponentFixture<DrCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
