import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnseignantPage } from './enseignant';

@NgModule({
  declarations: [
    EnseignantPage,
  ],
  imports: [
    IonicPageModule.forChild(EnseignantPage),
  ],
})
export class EnseignantPageModule {}
