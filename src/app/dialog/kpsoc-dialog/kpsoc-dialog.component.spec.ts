import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpsocDialogComponent } from './kpsoc-dialog.component';

describe('KpsocDialogComponent', () => {
  let component: KpsocDialogComponent;
  let fixture: ComponentFixture<KpsocDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpsocDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpsocDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
