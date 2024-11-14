import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(private router: Router) { }
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
  }

}
