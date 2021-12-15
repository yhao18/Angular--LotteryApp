import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetValueComponent } from './bet-value.component';

describe('BetValueComponent', () => {
  let component: BetValueComponent;
  let fixture: ComponentFixture<BetValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
