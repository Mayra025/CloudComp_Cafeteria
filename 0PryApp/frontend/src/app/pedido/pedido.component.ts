import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../service/cafeteria.services';
import { Plato } from '../models/plato';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers: [CafeteriaService]
})
export class PedidoComponent implements OnInit {
  public platos: Plato[];
  public url: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Invoiceheader: any;


  constructor(
    private _cafeteriaService: CafeteriaService,
  ) {
    this.url = "https://2by88f9acd.execute-api.us-east-1.amazonaws.com/prod"
    this.platos = [];

    this._cafeteriaService.getPlatos().subscribe(
      res => {
        this.platos = res;
      },
      error => {
        console.log(<any>error);
      }
    );


  }
  ngOnInit(): void {
    this.getPlatos();

    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        searchPlaceholder: "Nombre del Plato"
      },
    };
    this.LoadInvoice();
    // this.getPedidos();
  }

  getPlatos() {
    this._cafeteriaService.getPlatos().subscribe(
        (res: Plato[]) => {
            console.log(res);

            if (res.length > 0) {
                this.platos = res;
                console.log(this.platos);
            }
        },
        error => {
            console.log(error);
        }
    );
}


  LoadInvoice() {
    this._cafeteriaService.getPlatos().subscribe(
      res => {
        this.Invoiceheader = res;
        this.dtTrigger.next(null);
      }
    );
  }
}
