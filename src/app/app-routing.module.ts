import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDonutModule } from './home-page/donut-box/view-donut/view-donut.module';
import { ViewDonutComponent } from './home-page/donut-box/view-donut/view-donut.component';
import { HomeRoutingModule } from './home-page/home-routing.module';
import { InfoPageModule } from './info-page/info-page.module';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {path: 'donuts/:id', component: ViewDonutComponent},
  {path: 'info-page', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ViewDonutModule,
  HomeRoutingModule,
  InfoPageModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
