import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { Empregado } from '../empregado';

@Component({
  selector: 'app-criar-empregado',
  templateUrl: './criar-empregado.component.html',
  styleUrls: ['./criar-empregado.component.css']
})
export class CriarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  submitted = false;

  constructor(private  empregadoServico: EmpregadoService) { }

  ngOnInit() {
  }

  novoEmpregado(): void {
    this.submitted = false;
    this.empregado = new Empregado();
  }

  salvar() {
    this.empregadoServico.criarEmpregado(this.empregado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empregado = new Empregado();
  }
  onSubmit() {
    this.submitted = true;
    this.salvar();
  }
}


