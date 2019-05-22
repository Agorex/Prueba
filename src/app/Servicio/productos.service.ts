import { Injectable } from '@angular/core';
<<<<<<< HEAD
// Archivo de Servicio
=======
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

>>>>>>> master
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 
      const url =  `https://testapi.io/api/hilderh/products/home`;

      return this.http.get(url);
  }

  getProductos(){
    return this.getQuery().pipe(map(data.items));
  }




}
