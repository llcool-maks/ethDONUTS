import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDonutModule } from './home-page/donut-box/view-donut/view-donut.module';
import { ViewDonutComponent } from './home-page/donut-box/view-donut/view-donut.component';
import { HomeRoutingModule } from './home-page/home-routing.module';
import { InfoPageModule } from './info-page/info-page.module';
import { InfoPageComponent } from './info-page/info-page.component';
import { DonutJsonComponent } from './donut/donut-json/donut-json.component';
import { DonutJsonModule } from './donut/donut-json/donut-json.module';
import { RawDonutsComponent } from './donut/raw-donuts/raw-donuts.component';
import { RawDonutsModule } from './donut/raw-donuts/raw-donuts.module';

const routes: Routes = [
  {path: 'donuts/:id', component: ViewDonutComponent},
  {path: 'raw-donuts/:id', component: RawDonutsComponent},
  {path: 'donuts-raw-json/:id', component: DonutJsonComponent},
  {path: 'info-page', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
  ViewDonutModule,
  HomeRoutingModule,
  InfoPageModule,
  DonutJsonModule,
  RawDonutsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
