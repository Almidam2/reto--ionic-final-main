import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/modelo/usuario';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 usuario: Usuario = new Usuario();
 
  constructor(private servicio: ServicioService, private router: Router) {}

  ngOnInit() {
  }
  
  enviarDatos() {
    if (this.usuario.username && this.usuario.contrasena) {
      this.servicio.getlogin(this.usuario.username, this.usuario.contrasena).subscribe({
        next: (response) => {
          localStorage.setItem('usuario', JSON.stringify(response));
          console.log(' Inicio exitoso, el usuario almacenado es:', localStorage.getItem('usuario'));
          this.router.navigate(['../tabs/juegos']);
        },
        error: (error) => {
          console.error('Error al iniciar sesión', error);
        }
      });
    } else {
      console.error('Nombre de usuario o contraseña no pueden estar vacíos');
    }
  }
}  
