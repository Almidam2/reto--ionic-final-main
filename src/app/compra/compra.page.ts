import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/modelo/producto';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  constructor(private router: Router, private app:AppComponent, private loadingController:LoadingController, private servicio: ServicioService) { }
  usuario: any = {};
  idventa:number=0;
  idAlquiler:number=0;
  idReparacion:number=0;
  usuarioo = JSON.parse(localStorage.getItem('usuario') || '{}');
  currentDate = new Date();
  currentString=this.currentDate.toLocaleDateString();
  alqdate=new Date();
  newalq=this.alqdate.setDate(this.alqdate.getDate()+5);
  newalqmes=this.alqdate.setMonth(this.alqdate.getMonth()+1);
  alqString=this.alqdate.getDate()+"/"+this.alqdate.getMonth()+"/"+this.alqdate.getFullYear();
  
  perfil(){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.username && usuario.contrasena) {
      this.router.navigate(['../tabs/editar']);
    } else {
      this.router.navigate(['../tabs/perfil']);
    }
  }

  public productos:Producto[]=[];
  ngOnInit() {
    console.log(this.currentString);
    console.log(this.alqString);
    
    
    this.productos=this.app.carrito;
  }

  onClick(){
    this.productos.forEach(element => {
      console.log("pasa");
      
      if(element.tipo==="compra" && this.idventa==0){
        this.addVenta(element);
      }
      if(element.tipo==="alquilar" && this.idAlquiler==0){
        this.addAlquler(element);
      }
      if(element.tipo==="reparar" && this.idReparacion==0){
        this.addReparacion(element);
      }
    });
  }

  reparar(producto: any){
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    console.log('Usuario en guardia:', usuario);
    if((usuario && usuario.username && usuario.contrasena)){
      console.log('LOGEADO');
      producto.tipo="reparar"
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

  async addVenta(producto:Producto){
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.venta(this.usuarioo.id,this.currentString,producto.precio ).subscribe(
      (res: any) => {
        this.idventa = res;
        console.log(this.idventa);
          this.addTckventa(producto);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async addAlquler(producto:Producto){
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.alquiler(this.usuarioo.id,this.currentString, this.alqString,producto.precio ).subscribe(
      (res: any) => {
        this.idAlquiler = res;
       // console.log(this.idventa);
        this.addTckAlq(producto);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async addReparacion(producto:Producto){
    const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.reparacion(this.usuarioo.id,this.currentString,producto.descripcion ).subscribe(
      (res: any) => {
        this.idReparacion = res;
        //console.log(this.idventa);
        this.addTckRep(producto);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
async addTckventa(producto:Producto){
  const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.ticketVenta(producto.id,this.idventa).subscribe(
      (res: any) => {
        this.idventa = res;
        console.log(this.idventa);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
}

async addTckAlq(producto:Producto){
  const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.ticketAlq(producto.id,this.idAlquiler).subscribe(
      (res: any) => {
        this.idventa = res;
        console.log(this.idventa);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
}

async addTckRep(producto:Producto){
  const loading = await this.loadingController.create({ message: 'Cargando...' });
    await loading.present();
    
    this.servicio.ticketRep(producto.id,this.idReparacion).subscribe(
      (res: any) => {
        this.idventa = res;
        console.log(this.idventa);
        loading.dismiss();
      },
        err => {
        console.log(err);
        loading.dismiss();
      }
    );
}
}
