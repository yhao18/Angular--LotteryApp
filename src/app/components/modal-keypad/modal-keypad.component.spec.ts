import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKeypadComponent } from './modal-keypad.component';

describe('ModalKeypadComponent', () => {
  let component: ModalKeypadComponent;
  let fixture: ComponentFixture<ModalKeypadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalKeypadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
