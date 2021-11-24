import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MunicipiosComponent } from './municipios.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule],
  declarations: [MunicipiosComponent],
  exports: [MunicipiosComponent]
})

export class MunicipiosModule {}
