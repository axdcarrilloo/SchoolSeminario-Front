import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoConsultarAsignacionComponent } from './periodo-consultar-asignacion.component';

describe('PeriodoConsultarAsignacionComponent', () => {
  let component: PeriodoConsultarAsignacionComponent;
  let fixture: ComponentFixture<PeriodoConsultarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoConsultarAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodoConsultarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
