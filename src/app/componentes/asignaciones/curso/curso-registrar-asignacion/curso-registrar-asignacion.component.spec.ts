import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRegistrarAsignacionComponent } from './curso-registrar-asignacion.component';

describe('CursoRegistrarAsignacionComponent', () => {
  let component: CursoRegistrarAsignacionComponent;
  let fixture: ComponentFixture<CursoRegistrarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoRegistrarAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoRegistrarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
