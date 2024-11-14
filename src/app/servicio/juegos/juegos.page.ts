import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio.service';
import { Producto } from 'src/modelo/producto';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  constructor(private servicio: ServicioService, private router: Router, private app: AppComponent) { }
  public  productos: Producto[] = [];
  private loadingController = inject(LoadingController);
  usuario: any = {};
  routerLink: string[] = [];

  ngOnInit() {
    this.getproducto();
  }

  perfil(){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.username && usuario.contrasena) {
      this.router.navigate(['../tabs/editar']);
    } else {
      this.router.navigate(['../tabs/perfil']);
    }
  }

  Comprar(producto: any){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log('Usuario en guardia:', usuario);
    if((usuario && usuario.username && usuario.contrasena)){
      console.log('LOGEADO');
      producto.tipo="compra"
      this.app.carrito.push(producto);
      console.log(this.app.carrito);
      return true;
    }else{
      console.log('NO LOGEADO');
      alert("Inicia sesión para continuar");
      this.router.navigate(['../tabs/perfil']);
      return false;
    }
  }

  alquilar(producto: any){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log('Usuario en guardia:', usuario);
    if((usuario && usuario.username && usuario.contrasena)){
      console.log('LOGEADO');
      producto.tipo="alquilar"
      this.app.carrito.push(producto);
      console.log(this.app.carrito);
      return true;
    }else{
      console.log('NO LOGEADO');
      alert("Inicia sesión para continuar");
      this.router.navigate(['../tabs/perfil']);
      return false;
    }
  }


  async getproducto(){
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();

    this.servicio.getProducto().subscribe(
      (res: any) => {
        this.productos = res;
        console.log(this.productos);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  slideOpts = {
    slidesPerView: 5,
    spaceBetween: 10,
  };
}
