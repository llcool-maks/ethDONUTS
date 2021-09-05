import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForADonutComponent } from './search-for-a-donut.component';

describe('SearchForADonutComponent', () => {
  let component: SearchForADonutComponent;
  let fixture: ComponentFixture<SearchForADonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForADonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForADonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
