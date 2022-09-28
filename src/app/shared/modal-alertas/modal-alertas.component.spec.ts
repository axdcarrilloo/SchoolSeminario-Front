import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlertasComponent } from './modal-alertas.component';

describe('ModalAlertasComponent', () => {
  let component: ModalAlertasComponent;
  let fixture: ComponentFixture<ModalAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
