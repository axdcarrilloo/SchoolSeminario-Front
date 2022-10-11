import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificarUsuarioComponent } from './modal-modificar-usuario.component';

describe('ModalModificarUsuarioComponent', () => {
  let component: ModalModificarUsuarioComponent;
  let fixture: ComponentFixture<ModalModificarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModificarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
