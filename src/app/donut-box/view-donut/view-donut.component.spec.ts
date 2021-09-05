import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDonutComponent } from './view-donut.component';

describe('ViewDonutComponent', () => {
  let component: ViewDonutComponent;
  let fixture: ComponentFixture<ViewDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
