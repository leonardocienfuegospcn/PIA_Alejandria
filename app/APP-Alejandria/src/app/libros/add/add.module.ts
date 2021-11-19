import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AddComponent } from './add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule],
  declarations: [AddComponent],
  exports: [AddComponent]
})

export class AddModule {}
