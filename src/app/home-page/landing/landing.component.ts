import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterContentInit {

  mintCost: BehaviorSubject<number> = this.web3.mintCost;
  minted: BehaviorSubject<number> = this.web3.mintedDonuts;
  maxMinted: BehaviorSubject<number> = this.web3.maxMintedDonuts;
  owners: BehaviorSubject<number> = new BehaviorSubject(5);
  youOwn: number = this.web3.userStoredDonutCount;
  mintButtonText: BehaviorSubject<string> = this.web3.mintButtonText;
  mintingOpens: BehaviorSubject<number> = this.web3.mintingOpens;
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
  }

}
