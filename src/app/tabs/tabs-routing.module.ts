import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../servicio/juegos/juegos.module').then(m => m.JuegosPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../ubicacion/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../galeria/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../informacion/informacion.module').then(m => m.InformacionPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'compra',
        loadChildren: () => import('../compra/compra.module').then( m => m.CompraPageModule)
      },
      {
        path: 'juegos',
        loadChildren: () => import('../servicio/juegos/juegos.module').then(m => m.JuegosPageModule)
      },
      {
        path: 'consolas',
        loadChildren: () => import('../servicio/consolas/consolas.module').then(m => m.ConsolasPageModule)
      },
      {
        path: 'otros',
        loadChildren: () => import('../servicio/otros/otros.module').then(m => m.OtrosPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: 'editar',
        loadChildren: () => import('../editar/editar.module').then(m => m.EditarPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
