import { Component } from '@angular/core';
import { Producto } from 'src/modelo/producto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  public carrito:Producto[]=[];
  getCarrito(){
    return this.carrito;
  }
}
