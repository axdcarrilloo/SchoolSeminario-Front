import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAsignacionesCursoComponent } from './registrar-asignaciones-curso.component';

describe('RegistrarAsignacionesCursoComponent', () => {
  let component: RegistrarAsignacionesCursoComponent;
  let fixture: ComponentFixture<RegistrarAsignacionesCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAsignacionesCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAsignacionesCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
