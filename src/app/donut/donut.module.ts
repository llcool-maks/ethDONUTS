import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from './donut.component';



@NgModule({
  declarations: [DonutComponent],
  imports: [
    CommonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    DonutComponent
  ]
})
export class DonutModule { }
