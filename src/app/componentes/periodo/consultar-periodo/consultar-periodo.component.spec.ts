import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPeriodoComponent } from './consultar-periodo.component';

describe('ConsultarPeriodoComponent', () => {
  let component: ConsultarPeriodoComponent;
  let fixture: ComponentFixture<ConsultarPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
