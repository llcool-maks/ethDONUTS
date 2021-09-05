import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutBoxComponent } from './donut-box.component';
import { ViewDonutModule } from './view-donut/view-donut.module';



@NgModule({
  declarations: [DonutBoxComponent],
  imports: [
    CommonModule,
    ViewDonutModule
  ],
  exports: [
    DonutBoxComponent
  ]
})
export class DonutBoxModule { }
