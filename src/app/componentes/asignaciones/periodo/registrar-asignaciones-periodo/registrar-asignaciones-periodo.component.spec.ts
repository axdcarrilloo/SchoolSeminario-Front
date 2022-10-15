import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsignacionesPeriodoComponent } from './registrar-asignaciones-periodo.component';

describe('RegistrarAsignacionesPeriodoComponent', () => {
  let component: RegistrarAsignacionesPeriodoComponent;
  let fixture: ComponentFixture<RegistrarAsignacionesPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAsignacionesPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAsignacionesPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
