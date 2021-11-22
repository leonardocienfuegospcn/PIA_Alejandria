import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorialesPageRoutingModule } from './editoriales-routing.module';

import { EditorialesPage } from './editoriales.page';
import { AddModule } from './add/add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorialesPageRoutingModule,
    AddModule
  ],
  declarations: [EditorialesPage]
})
export class EditorialesPageModule {}
