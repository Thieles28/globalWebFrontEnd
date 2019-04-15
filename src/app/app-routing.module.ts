import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { ListarEmpregadoComponent } from './listar-empregado/listar-empregado.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarEmpregadoComponent },
  { path: 'adicionar', component: CriarEmpregadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
