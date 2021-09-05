import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDonutsComponent } from './your-donuts.component';

describe('YourDonutsComponent', () => {
  let component: YourDonutsComponent;
  let fixture: ComponentFixture<YourDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDonutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
