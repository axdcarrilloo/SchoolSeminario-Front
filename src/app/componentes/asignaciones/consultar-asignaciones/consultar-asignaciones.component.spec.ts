import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAsignacionesComponent } from './consultar-asignaciones.component';

describe('ConsultarAsignacionesComponent', () => {
  let component: ConsultarAsignacionesComponent;
  let fixture: ComponentFixture<ConsultarAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAsignacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
