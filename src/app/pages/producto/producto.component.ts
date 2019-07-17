import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class Productocomponent  implements OnInit {

  constructor( public ProductosService: ProductosService ) { }

  ngOnInit() {
  }

}
