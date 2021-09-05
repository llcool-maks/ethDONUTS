import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDonutComponent } from './view-donut.component';
import { DonutModule } from 'src/app/donut/donut.module';



@NgModule({
  declarations: [ViewDonutComponent],
  imports: [
    CommonModule,
    DonutModule
  ],
  exports: [
    ViewDonutComponent
  ]
})
export class ViewDonutModule { }
