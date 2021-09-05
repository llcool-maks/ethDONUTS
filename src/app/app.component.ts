import { Component } from '@angular/core';
import { Web3Service } from './web3.service';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimations, routerAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimations, routerAnimations]
})
export class AppComponent {
  title = 'donuts';
  showPopUp: BehaviorSubject<boolean> = this.web3.newlyMintedPopup;
  onHomePage: BehaviorSubject<boolean> = this.web3.onHomePage;

  constructor(
    private web3: Web3Service
  ) {

  }
}
