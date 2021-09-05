import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyMintedPopUpComponent } from './newly-minted-pop-up.component';

describe('NewlyMintedPopUpComponent', () => {
  let component: NewlyMintedPopUpComponent;
  let fixture: ComponentFixture<NewlyMintedPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyMintedPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyMintedPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
