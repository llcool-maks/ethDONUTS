import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-search-for-a-donut',
  templateUrl: './search-for-a-donut.component.html',
  styleUrls: ['./search-for-a-donut.component.scss']
})
export class SearchForADonutComponent implements OnInit {

  searchMessage = 'Enter a donut #';
  mintedDonuts = this.web3.mintedDonuts;
  @ViewChild('searchInput') searchInput: ElementRef;
  constructor(
    private router: Router,
    private web3: Web3Service
  ) { }

  ngOnInit(): void {
  }

  goToResult(): void {
    if (Number(this.searchInput.nativeElement.value) < 0) {
      return;
    }
    if (Number(this.searchInput.nativeElement.value) > this.mintedDonuts.getValue()) {
      return;
    }
    if (Number(this.searchInput.nativeElement.value) < 0) {
      return;
    }
    this.router.navigateByUrl('donuts/' + Number(this.searchInput.nativeElement.value), {skipLocationChange: true});
    this.web3.onHomePage.next(false);
  }

}
