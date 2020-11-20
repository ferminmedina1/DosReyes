import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrProductsComponent } from './dr-products.component';

describe('DrProductsComponent', () => {
  let component: DrProductsComponent;
  let fixture: ComponentFixture<DrProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
