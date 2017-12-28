import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NiveauPage } from './niveau';

@NgModule({
  declarations: [
    NiveauPage,
  ],
  imports: [
    IonicPageModule.forChild(NiveauPage),
  ],
})
export class NiveauPageModule {}
