import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { DonutModule } from '../donut/donut.module';
import { RouterModule } from '@angular/router';
import { SearchForADonutModule } from './search-for-a-donut/search-for-a-donut.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    DonutModule,
    RouterModule,
    SearchForADonutModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
