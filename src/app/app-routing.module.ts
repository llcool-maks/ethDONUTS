import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewDonutModule } from './donut-box/view-donut/view-donut.module';
import { ViewDonutComponent } from './donut-box/view-donut/view-donut.component';
import { LandingModule } from './home-page/landing/landing.module';
import { LandingComponent } from './home-page/landing/landing.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    {path: '', component: LandingComponent}
  ]},
  {path: 'donuts/:id', component: ViewDonutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   HomePageModule,
    ViewDonutModule,
  LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
