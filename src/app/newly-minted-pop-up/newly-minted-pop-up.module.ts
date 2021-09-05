import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlyMintedPopUpComponent } from './newly-minted-pop-up.component';
import { ViewDonutModule } from '../donut-box/view-donut/view-donut.module';



@NgModule({
  declarations: [NewlyMintedPopUpComponent],
  imports: [
    CommonModule,
    ViewDonutModule
  ],
  exports: [
    NewlyMintedPopUpComponent
  ]
})
export class NewlyMintedPopUpModule { }
