import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificarPeriodoComponent } from './modal-modificar-periodo.component';

describe('ModalModificarPeriodoComponent', () => {
  let component: ModalModificarPeriodoComponent;
  let fixture: ComponentFixture<ModalModificarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModificarPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalModificarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
