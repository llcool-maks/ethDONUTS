import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDonutModule } from './home-page/donut-box/view-donut/view-donut.module';
import { ViewDonutComponent } from './home-page/donut-box/view-donut/view-donut.component';
import { HomeRoutingModule } from './home-page/home-routing.module';

const routes: Routes = [
  {path: 'donuts/:id', component: ViewDonutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ViewDonutModule,
  HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
