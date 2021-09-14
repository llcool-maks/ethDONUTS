import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawDonutsComponent } from './raw-donuts.component';



@NgModule({
  declarations: [RawDonutsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RawDonutsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class RawDonutsModule { }
