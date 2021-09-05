import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourDonutsComponent } from './your-donuts.component';
import { DonutModule } from 'src/app/donut/donut.module';



@NgModule({
  declarations: [YourDonutsComponent],
  imports: [
    CommonModule,
    DonutModule
  ],
  exports: [
    YourDonutsComponent
  ]
})
export class YourDonutsModule { }
