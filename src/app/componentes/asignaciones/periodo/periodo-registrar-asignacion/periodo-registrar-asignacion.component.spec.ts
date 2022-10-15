import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoRegistrarAsignacionComponent } from './periodo-registrar-asignacion.component';

describe('PeriodoRegistrarAsignacionComponent', () => {
  let component: PeriodoRegistrarAsignacionComponent;
  let fixture: ComponentFixture<PeriodoRegistrarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoRegistrarAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodoRegistrarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
