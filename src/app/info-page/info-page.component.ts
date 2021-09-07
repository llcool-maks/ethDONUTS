import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements AfterContentInit{

  constructor(
    private web3: Web3Service
  ) { }

  ngAfterContentInit(): void {
    this.web3.onHomePage.next(false);
  }

}
