import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from 'src/app/web3.service';
import { fadeAnimations } from 'src/app/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeAnimations]
})
export class LandingComponent implements OnInit, AfterContentInit {

  mintCost: BehaviorSubject<number> = this.web3.mintCost;
  minted: BehaviorSubject<number> = this.web3.mintedDonuts;
  mintingOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  maxMinted: BehaviorSubject<number> = this.web3.maxMintedDonuts;
  owners: BehaviorSubject<number> = new BehaviorSubject(5);
  youOwn: number = this.web3.userStoredDonutCount;
  mintButtonText: BehaviorSubject<string> = this.web3.mintButtonText;
  mintingOpens: BehaviorSubject<number> = this.web3.mintingOpens;
  startTime = this.web3.mintingOpens;
  currentTime;

  constructor(
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }

  mintDonuts(): void {
    this.web3.mintDonut();
  }

  ngAfterContentInit(): void {
    this.web3.onHomePage.next(true);
    this.currentTime = new Date().getTime();
    if (Number(this.startTime.getValue()) === -1 || (Number(this.currentTime) < Number(this.startTime.getValue()) * 1000)) {
      const mintOpeningInterval = setInterval(() => {
        this.currentTime = new Date().getTime();
        if (Number(this.currentTime) > Number(this.startTime.getValue()) * 1000) {
          this.mintingOpened.next(true);
          clearInterval(mintOpeningInterval);
        }
      }, 500);
    } else {
      this.mintingOpened.next(true);
    }
  }

}
