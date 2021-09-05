import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { FloorPipe } from './floor.pipe';



@NgModule({
  declarations: [TimerComponent, FloorPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TimerComponent
  ],
})
export class TimerModule { }
