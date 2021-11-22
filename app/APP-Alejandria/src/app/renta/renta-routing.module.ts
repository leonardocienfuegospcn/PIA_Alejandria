import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentaPage } from './renta.page';

const routes: Routes = [
  {
    path: '',
    component: RentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentaPageRoutingModule {}
