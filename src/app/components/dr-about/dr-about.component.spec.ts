import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAboutComponent } from './dr-about.component';

describe('DrAboutComponent', () => {
  let component: DrAboutComponent;
  let fixture: ComponentFixture<DrAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
