import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../home-page/home-page.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { LandingModule } from '../home-page/landing/landing.module';
import { LandingComponent } from '../home-page/landing/landing.component';
import { DonutBoxComponent } from './donut-box/donut-box.component';
import { DonutBoxModule } from './donut-box/donut-box.module';
import { YourDonutsModule } from './your-donuts/your-donuts.module';
import { YourDonutsComponent } from './your-donuts/your-donuts.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
    {path: '', component: LandingComponent},
    {path: 'donut_box', component: DonutBoxComponent},
    {path: 'your_donuts', component: YourDonutsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes),
   HomePageModule,
  LandingModule,
  DonutBoxModule,
  YourDonutsModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
