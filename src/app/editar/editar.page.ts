import { Component, inject, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuario } from 'src/modelo/usuario';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  constructor(private servicio: ServicioService, private router: Router, public photoService:PhotoService) { }
  private loadingController = inject(LoadingController);
  usuario: Usuario = new Usuario();
  //usuarioo: any = {};
  usuarioo = JSON.parse(localStorage.getItem('usuario') || '{}');
  ngOnInit() {
    
  }

  logout(){
    localStorage.removeItem('usuario');
    console.log("HAS CERRADO SESIÓN CORRECTAMENTE");
    alert ("Has cerrado sesión");
    this.router.navigate(['../tabs/tab1'])

  }

  enviarDatos() {
    const usuarioo = JSON.parse(localStorage.getItem('usuario') || '{}');
    if ( this.usuario.nombre && this.usuario.apellido && this.usuario.correo) {
      this.servicio.updateUser( usuarioo.id, this.usuario.correo, this.usuario.nombre, this.usuario.apellido).subscribe({
        next: (response) => {
          console.info('Usuario actualizado exitosamente');
          localStorage.setItem('usuario', JSON.stringify(response));
          this.router.navigate(['../tabs/juegos']);
          console.log('Usuario almacenado:', localStorage.getItem('usuario'));
        },
        error: (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      });
    } else {
      console.error('Rellena todos los campos');
    }
  }

  addPhotogallery(){
    this.photoService.addNewToGallery();
    //this.app.cargarimg();
    //this.router.navigateByUrl("");
    

  }
}

