import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-newly-minted-pop-up',
  templateUrl: './newly-minted-pop-up.component.html',
  styleUrls: ['./newly-minted-pop-up.component.scss']
})
export class NewlyMintedPopUpComponent implements OnInit {

  object = this.web3.objectName;
  constructor(
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }

}
