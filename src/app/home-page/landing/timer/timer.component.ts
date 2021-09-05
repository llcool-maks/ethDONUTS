import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  startTime = this.web3.mintingOpens;
  currentTime;
  
  constructor(private web3: Web3Service) {

  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().getTime();
    }, 500);
  }

}
