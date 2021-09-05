import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  onHomePage = new BehaviorSubject(true);
  showPopUp: BehaviorSubject<boolean> = this.web3.newlyMintedPopup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      console.dir(url);
      if (url[0].path !== '') {
        this.onHomePage.next(false);
      }
    });
  }

  back(): void {
    if (this.onHomePage) {
      this.showPopUp.next(false);
      return;
    }
    this.router.navigateByUrl('');
  }
}
