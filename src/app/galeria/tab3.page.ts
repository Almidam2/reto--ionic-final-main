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
    { imageUrl: 'https://media.v2.siweb.es/uploaded_thumb_big/afa0db3886e2dba1cbcafffd816be445/3_2_tipos_de_empresa.jpg' },
    { imageUrl: 'https://static.wixstatic.com/media/c97e9c_81d2a0efcb4a4309b2c2241ffcb8e7da~mv2.webp/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c97e9c_81d2a0efcb4a4309b2c2241ffcb8e7da~mv2.webp' },
    { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yqeVPUI2xYmx2-aLWG_xZMDq5hyQIzzS-Nj4UsndnIBhL0dOgMhs_mftESzdyfKKydU&usqp=CAU' },
    { imageUrl: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/08/gamestop-abre-tiendas-fisicas-retro-vender-consolas-juegos-hace-decadas-4058712.jpg?tf=3840x' },
    { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNxeHi5ekrrURk5jbrkm3jrcdCqUIYqvl0spqMBPZvHCUSxwIAnKT4T1tZsd2djSZ2No&usqp=CAU' },
    { imageUrl: 'https://www.soloboadilla.es/fileadmin/Archivos_de_usuario/Comun/Antes_2019/fotos/te_interesa/1612-MadMixGames-Tienda.jpg' },
    { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrAOoC_UWLK3-xutdmgeU0yDPXRJWOv_UxXVQCgmRhUBFgHttT5jRaXiDL60uGxqGq6o&usqp=CAU' },
    { imageUrl: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/panel-playstation-xbox-e3-2014-2036135.jpg?tf=3840x' },
  ];

}
