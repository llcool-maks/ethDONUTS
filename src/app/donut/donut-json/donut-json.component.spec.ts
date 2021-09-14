import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutJsonComponent } from './donut-json.component';

describe('DonutJsonComponent', () => {
  let component: DonutJsonComponent;
  let fixture: ComponentFixture<DonutJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
