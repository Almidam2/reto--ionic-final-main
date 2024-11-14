import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asapScheduler } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


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

  onSubmit() {
   
  }

}

