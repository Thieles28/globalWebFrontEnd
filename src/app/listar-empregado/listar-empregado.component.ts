import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpregadoService} from '../empregado.service';
import { Empregado} from '../empregado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empregado',
  templateUrl: './listar-empregado.component.html',
  styleUrls: ['./listar-empregado.component.css']
})
export class ListarEmpregadoComponent implements OnInit {
  empregados: Observable<Empregado[]>;
  constructor( private empregadoService: EmpregadoService, private route: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.empregados = this.empregadoService.listarEmpregado();
  }

  removeEmpregado(id: number) {
    this.empregadoService.removerEmpregado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  removerTodosEmpregado() {
    this.empregadoService.removerTodos()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
}
