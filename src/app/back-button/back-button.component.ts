import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../web3.service';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  onHomePage = this.web3.onHomePage;
  showPopUp: BehaviorSubject<boolean> = this.web3.newlyMintedPopup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private web3: Web3Service,
    private homePageService: HomePageService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.url.subscribe(url => {
    //   if (url[0].path !== '') {
    //     this.onHomePage.next(false);
    //   }
    // });
  }

  back(): void {
    this.showPopUp.next(false);
    this.router.navigateByUrl('', {skipLocationChange: true});
    this.web3.onHomePage.next(true);
    this.renderer.removeClass(this.homePageService.getSelectors().donutBoxNav.getValue().nativeElement, 'selected');
    this.renderer.removeClass(this.homePageService.getSelectors().yourDonutsNav.getValue().nativeElement, 'selected');
  }
}
