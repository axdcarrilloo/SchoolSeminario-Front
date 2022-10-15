import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsignacionesCursoComponent } from './consultar-asignaciones-curso.component';

describe('ConsultarAsignacionesCursoComponent', () => {
  let component: ConsultarAsignacionesCursoComponent;
  let fixture: ComponentFixture<ConsultarAsignacionesCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAsignacionesCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAsignacionesCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
