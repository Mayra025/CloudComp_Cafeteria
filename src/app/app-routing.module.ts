import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { PedidoComponent } from "./pedido/pedido.component";
import { DatatableComponent } from "./datatable/datatable.component";

//array de rutas
const router: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'table', component: DatatableComponent },
  { path: '**', component:InicioComponent },

 

];

//modulo de rutas, y agregar al app.module
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { }