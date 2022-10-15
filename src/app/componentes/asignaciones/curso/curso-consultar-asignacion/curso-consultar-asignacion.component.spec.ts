import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoConsultarAsignacionComponent } from './curso-consultar-asignacion.component';

describe('CursoConsultarAsignacionComponent', () => {
  let component: CursoConsultarAsignacionComponent;
  let fixture: ComponentFixture<CursoConsultarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoConsultarAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoConsultarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
