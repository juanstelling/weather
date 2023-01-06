import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHoursComponent } from './temp-hours.component';

describe('TempHoursComponent', () => {
  let component: TempHoursComponent;
  let fixture: ComponentFixture<TempHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempHoursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TempHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
