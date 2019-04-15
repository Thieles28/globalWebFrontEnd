import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEmpregadoComponent } from './detalhes-empregado.component';

describe('DetalhesEmpregadoComponent', () => {
  let component: DetalhesEmpregadoComponent;
  let fixture: ComponentFixture<DetalhesEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
