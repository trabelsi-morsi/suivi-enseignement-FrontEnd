import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentAccueilPage } from './agent-accueil';

@NgModule({
  declarations: [
    AgentAccueilPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentAccueilPage),
  ],
})
export class AgentAccueilPageModule {}
