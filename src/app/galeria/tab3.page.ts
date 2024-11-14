import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
  items = [
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
  ];

}
