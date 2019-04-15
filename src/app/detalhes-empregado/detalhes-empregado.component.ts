import { Component, Input, OnInit } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { ListarEmpregadoComponent } from '../listar-empregado/listar-empregado.component';
import { Empregado } from '../empregado';

@Component({
  selector: 'app-detalhes-empregado',
  templateUrl: './detalhes-empregado.component.html',
  styleUrls: ['./detalhes-empregado.component.css']
})
export class DetalhesEmpregadoComponent implements OnInit {
  @Input() empregado: Empregado;
  constructor(private empregadoServico: EmpregadoService, private listarComponente: ListarEmpregadoComponent) { }

  ngOnInit() {
  }

  atualizarActive(isActive: boolean) {
    this.empregadoServico.atualizarEmpregado(this.empregado.id,
      { nome: this.empregado.nome, sobrenome: this.empregado.sobrenome, email: this.empregado.email,
        genero: this.empregado.genero, telefone: this.empregado.telefone, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.empregado = data as Empregado;
        },
        error => console.log(error));
  }

  removerEmpregado() {
    this.empregadoServico.removerEmpregado(this.empregado.id)
      .subscribe(
        data => {
          console.log(data);
          this.listarComponente.reloadData();
        },
        error => console.log(error));
  }
}
