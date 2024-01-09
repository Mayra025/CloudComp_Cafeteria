import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CBodyDirective } from './c-body.directive';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent, CBodyDirective,
    InicioComponent,
    PedidoComponent,
    DatatableComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, //para el modulo de rutas
    HttpClientModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
