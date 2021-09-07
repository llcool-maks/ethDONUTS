import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Web3Service } from '../web3.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-newly-minted-pop-up',
  templateUrl: './newly-minted-pop-up.component.html',
  styleUrls: ['./newly-minted-pop-up.component.scss']
})
export class NewlyMintedPopUpComponent implements OnInit, AfterContentInit {

  object = this.web3.objectName;
  mostRecentObject = this.web3.specificDonut;
  constructor(
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.web3.newlyMintedPopup.next(true);
  }

}
