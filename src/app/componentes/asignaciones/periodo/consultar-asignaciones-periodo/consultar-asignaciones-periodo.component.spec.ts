import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsignacionesPeriodoComponent } from './consultar-asignaciones-periodo.component';

describe('ConsultarAsignacionesPeriodoComponent', () => {
  let component: ConsultarAsignacionesPeriodoComponent;
  let fixture: ComponentFixture<ConsultarAsignacionesPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAsignacionesPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAsignacionesPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
