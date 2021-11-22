import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { AddModule } from './add/add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    AddModule
  ],
  declarations: [AutoresPage]
})
export class AutoresPageModule {}
