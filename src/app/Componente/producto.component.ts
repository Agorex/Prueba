import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../Servicio/producto.service';


@Component({
selector: 'app-producto',
templateUrl: './producto.component.html',
})

export class ProductoComponent implements OnInit {


    Productos: any[] = {};

    constructor(private prod: ProductosService){ 
    this.prod.getProductos().suscribe(data => 
    
    this.Productos = data;
    )

    };

     
    ngOnInit(){

    }


}

