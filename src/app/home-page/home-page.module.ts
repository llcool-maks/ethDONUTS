import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { DonutModule } from '../donut/donut.module';
import { LandingModule } from './landing/landing.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    DonutModule,
    LandingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
