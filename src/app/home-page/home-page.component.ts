import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../web3.service';
import { Router } from '@angular/router';
import { routerAnimations } from '../animations';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [routerAnimations]
})
export class HomePageComponent implements OnInit, AfterContentInit {

  @ViewChild('donutBoxNav') private donutBoxNav: ElementRef;
  @ViewChild('yourDonutsNav') private yourDonutsNav: ElementRef;
  constructor(
    private router: Router,
    private web3: Web3Service,
    private renderer: Renderer2,
    private homePageService: HomePageService
  ) { }

  ngOnInit(): void {
  }

  goToDonutBox(): void {
    this.router.navigateByUrl('/donut_box', {skipLocationChange: true});
    this.renderer.removeClass(this.yourDonutsNav.nativeElement, 'selected');
    this.renderer.addClass(this.donutBoxNav.nativeElement, 'selected');
    this.web3.onHomePage.next(false);
  }

  goToYourDonuts(): void {
    this.router.navigateByUrl('/your_donuts', {skipLocationChange: true});
    this.renderer.removeClass(this.donutBoxNav.nativeElement, 'selected');
    this.renderer.addClass(this.yourDonutsNav.nativeElement, 'selected');
    this.web3.onHomePage.next(false);
  }

  goToInfoPage(): void {
    this.router.navigateByUrl('/info-page', {skipLocationChange: true});
    this.web3.onHomePage.next(false);
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.homePageService.donutBoxNav.next(this.donutBoxNav);
      this.homePageService.yourDonutsNav.next(this.yourDonutsNav);
    }, 500);
  }

}
