import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { TimerModule } from './timer/timer.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    TimerModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
