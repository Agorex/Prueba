import { Component, OnInit} from '@angular/core';


@Component({
selector: 'app-producto',
templateUrl: './producto.component.html',
})

export class ProductoComponent implements OnInit {


    Productos: Object = {
      id: null,
      nombre: null,
      precio: null,
    };


}

