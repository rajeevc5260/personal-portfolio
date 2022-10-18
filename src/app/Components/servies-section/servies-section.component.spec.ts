import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiesSectionComponent } from './servies-section.component';

describe('ServiesSectionComponent', () => {
  let component: ServiesSectionComponent;
  let fixture: ComponentFixture<ServiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
