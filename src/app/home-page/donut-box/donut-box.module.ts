import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutBoxComponent } from './donut-box.component';
import { ViewDonutModule } from './view-donut/view-donut.module';
import { DonutModule } from 'src/app/donut/donut.module';



@NgModule({
  declarations: [DonutBoxComponent],
  imports: [
    CommonModule,
    ViewDonutModule,
    DonutModule
  ],
  exports: [
    DonutBoxComponent
  ]
})
export class DonutBoxModule { }
