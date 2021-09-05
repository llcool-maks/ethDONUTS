import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  mintCost: BehaviorSubject<number> = new BehaviorSubject(25);
  minted: BehaviorSubject<number> = new BehaviorSubject(25);
  maxMinted: BehaviorSubject<number> = new BehaviorSubject(25);
  owners: BehaviorSubject<number> = new BehaviorSubject(5);
  youOwn: BehaviorSubject<number> = new BehaviorSubject(25);
  mintButtonText: BehaviorSubject<string> = this.web3.mintButtonText;
  constructor(
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }

  mintDonuts(): void {
    this.web3.mintDonut();
  }

}
