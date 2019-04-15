import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEmpregadoComponent } from './criar-empregado.component';

describe('CriarEmpregadoComponent', () => {
  let component: CriarEmpregadoComponent;
  let fixture: ComponentFixture<CriarEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
