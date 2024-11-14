import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/modelo/usuario';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private servicio: ServicioService, private router: Router) { }
  usuario: Usuario = new Usuario();
  ngOnInit() {
  }


  enviarDatos(){
    if(this.usuario.nombre && this.usuario.apellido && this.usuario.username && this.usuario.correo && this.usuario.contrasena){
      this.servicio.postuser(this.usuario.nombre, this.usuario.apellido, this.usuario.username , this.usuario.correo, this.usuario.contrasena).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response)
          localStorage.setItem('usuario', JSON.stringify(response));
          this.router.navigate(['../tabs/perfil'])
          console.log('Usuario almacenado:', localStorage.getItem('usuario'));
        },
        error: (error) => {
          console.error('Error al registrarse', error);
        }
      });
    }else{
      console.error('Rellena todos los campos');
    }
  }
  
}
