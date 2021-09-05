import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { BehaviorSubject } from 'rxjs';
import { DonutService } from 'src/app/donut/donut.service';

@Component({
  selector: 'app-view-donut',
  templateUrl: './view-donut.component.html',
  styleUrls: ['./view-donut.component.scss']
})
export class ViewDonutComponent implements OnInit, AfterContentInit {

  id;
  metadata: BehaviorSubject<any> = this.web3.specificDonut;

  metadataFromService = this.donutService.metadata;
  raritiesFromService = this.donutService.rarities;
  constructor(
    private snapshot: ActivatedRoute,
    private web3: Web3Service,
    private donutService: DonutService
  ) { }

  ngOnInit(): void {
    this.snapshot.params.subscribe((result) => {
      this.id = result.id;
      this.web3.getSpecificDonut(this.id);
      this.metadata.subscribe(test => {
        console.dir(test);
      });
    });
  }

  ngAfterContentInit(): void {
    this.web3.onHomePage.next(false);
  }

}
