import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentaPageRoutingModule } from './renta-routing.module';

import { RentaPage } from './renta.page';
import { AddModule } from './add/add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentaPageRoutingModule,
    AddModule
  ],
  declarations: [RentaPage]
})
export class RentaPageModule {}
