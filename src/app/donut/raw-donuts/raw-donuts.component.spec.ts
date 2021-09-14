import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawDonutsComponent } from './raw-donuts.component';

describe('RawDonutsComponent', () => {
  let component: RawDonutsComponent;
  let fixture: ComponentFixture<RawDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawDonutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
