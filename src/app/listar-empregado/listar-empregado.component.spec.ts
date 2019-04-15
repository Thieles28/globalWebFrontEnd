import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpregadoComponent } from './listar-empregado.component';

describe('ListarEmpregadoComponent', () => {
  let component: ListarEmpregadoComponent;
  let fixture: ComponentFixture<ListarEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
