import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SallePage } from './salle';

@NgModule({
  declarations: [
    SallePage,
  ],
  imports: [
    IonicPageModule.forChild(SallePage),
  ],
})
export class SallePageModule {}
