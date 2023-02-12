import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPerformanceComponent } from './facility-performance.component';

describe('FacilityPerformanceComponent', () => {
  let component: FacilityPerformanceComponent;
  let fixture: ComponentFixture<FacilityPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
