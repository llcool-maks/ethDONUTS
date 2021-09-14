import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutJsonComponent } from './donut-json.component';



@NgModule({
  declarations: [DonutJsonComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    DonutJsonComponent
  ]
})
export class DonutJsonModule { }
