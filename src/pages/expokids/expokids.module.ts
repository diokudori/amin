import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpokidsPage } from './expokids';

@NgModule({
  declarations: [
    ExpokidsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpokidsPage),
  ],
})
export class ExpokidsPageModule {}
