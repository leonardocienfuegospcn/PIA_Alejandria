import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'libros', canActivate:[AuthGuard],
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'empleados', canActivate:[AuthGuard],
    loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },
  {
    path: 'clientes', canActivate:[AuthGuard],
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'autores', canActivate:[AuthGuard],
    loadChildren: () => import('./autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'editoriales', canActivate:[AuthGuard],
    loadChildren: () => import('./editoriales/editoriales.module').then( m => m.EditorialesPageModule)
  },
  {
    path: 'renta', canActivate:[AuthGuard],
    loadChildren: () => import('./renta/renta.module').then( m => m.RentaPageModule)
  },
  {
    path: 'detalles', canActivate:[AuthGuard],
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'ubicaciones', canActivate:[AuthGuard],
    loadChildren: () => import('./ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
