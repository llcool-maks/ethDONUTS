import { Component } from '@angular/core';
import { Web3Service } from './web3.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'donuts';
  showPopUp: BehaviorSubject<boolean> = this.web3.newlyMintedPopup;

  constructor(
    private web3: Web3Service
  ) {

  }
}
