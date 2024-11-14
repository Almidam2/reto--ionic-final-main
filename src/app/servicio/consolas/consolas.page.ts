import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { FormularioModalComponent } from 'src/app/formulario-modal/formulario-modal.component';
import { ServicioService } from 'src/app/servicio.service';
import { Producto } from 'src/modelo/producto';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.page.html',
  styleUrls: ['./consolas.page.scss'],
})
export class ConsolasPage implements OnInit {
  
  constructor(private servicio: ServicioService, private router: Router, private app: AppComponent, private modalController: ModalController ) { }
  public  productos: Producto[] = [];
  private loadingController = inject(LoadingController);
  usuario: any = {};

  perfil(){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.username && usuario.contrasena) {
      this.router.navigate(['../tabs/editar']);
    } else {
      this.router.navigate(['../tabs/perfil']);
    }
  }
  
  ngOnInit() {
    this.getproductoConsola();
  }

  reparar(producto: any) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log('Usuario en guardia:', usuario);
  
    if (usuario && usuario.username && usuario.contrasena) {
      console.log('LOGEADO');
      producto.tipo = 'reparar';
      this.app.carrito.push(producto); // Añadir al carrito
      console.log(this.app.carrito);
  
      // Abrir el modal con el formulario
      this.openModal();
    } else {
      console.log('NO LOGEADO');
      alert('Inicia sesión para continuar');
      this.router.navigate(['../tabs/perfil']); // Redirigir al perfil
    }
  }
  
  async openModal() {
    const modal = await this.modalController.create({
      component: FormularioModalComponent, 
    });
    return await modal.present();
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

  async getproductoConsola(){
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();

    this.servicio.getProductoConsola().subscribe(
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
    slidesPerView: 3,
    spaceBetween: 10,
  };

}

