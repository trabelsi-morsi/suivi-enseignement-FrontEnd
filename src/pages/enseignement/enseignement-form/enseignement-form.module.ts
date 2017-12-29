import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnseignementFormPage } from './enseignement-form';

@NgModule({
  declarations: [
    EnseignementFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EnseignementFormPage),
  ],
})
export class EnseignementFormPageModule {}
