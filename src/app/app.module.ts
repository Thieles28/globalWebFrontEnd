import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { ListarEmpregadoComponent } from './listar-empregado/listar-empregado.component';
import { DetalhesEmpregadoComponent } from './detalhes-empregado/detalhes-empregado.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarEmpregadoComponent,
    ListarEmpregadoComponent,
    DetalhesEmpregadoComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
