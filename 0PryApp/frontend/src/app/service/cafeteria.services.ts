import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plato } from '../models/plato';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Importar el operador map

@Injectable(
    { providedIn: 'root' }
)
export class CafeteriaService {
    public url: string;
    private urlApi = "https://2by88f9acd.execute-api.us-east-1.amazonaws.com/prod";
    // private urlApi = "https://c20wo5eydl.execute-api.us-east-1.amazonaws.com/beta/";

    constructor(
        private _http: HttpClient
    ) {
        this.url = this.urlApi
    }
    //ver todos los eventos
    //http://localhost:3600/eventos
    getPlatos(): Observable<Plato[]> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.urlApi, { headers: headers }).pipe(
            map((response: any) => {
                const parsedResponse = JSON.parse(response.body);
    
                if (Array.isArray(parsedResponse)) {
                    return parsedResponse.map((plato: any) => ({
                        nombre: plato.nombre,
                        imagen: plato.imagen,
                        precio: plato.precio,
                    }));
                } else {
                    return [];
                }
            })
        );
    }

}