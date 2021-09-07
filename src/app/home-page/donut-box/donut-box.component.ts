import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterContentInit, HostListener } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donut-box',
  templateUrl: './donut-box.component.html',
  styleUrls: ['./donut-box.component.scss']
})
export class DonutBoxComponent implements AfterContentInit{

  donuts = this.web3.donuts;
  mintedDonuts = this.web3.mintedDonuts;
  storedDonutCount = this.web3.storedDonutCount;
  currentPosition = 0;
  @ViewChild('donutBox') private donutBox: ElementRef;
  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event: MouseWheelEvent): void {
    this.scrollToElement(event.deltaY);
  }

  constructor(
    private web3: Web3Service,
    private renderer: Renderer2,
    private router: Router
  ) { }

  scrollToElement(deltaY): void {
    const element = this.donutBox.nativeElement;
    const elementWidth = element.scrollWidth;
    this.currentPosition += deltaY;
    if (this.currentPosition > 2000) {
      this.currentPosition = -1 * (elementWidth + 499);
    } else if (this.currentPosition < -1 * (elementWidth + 500)) {
      this.currentPosition = 2000;
    }
    this.renderer.setStyle(
      element,
      'transform',
      `translateX(${this.currentPosition}px)`
      );
  }

  ngAfterContentInit(): void {
    this.web3.onHomePage.next(false);
  }

  goToDonut(index: number): void {
    if (Number(index) > this.mintedDonuts.getValue()) {
      return;
    }
    if (Number(index) < 0) {
      return;
    }
    this.router.navigateByUrl('donuts/' + Number(index), {skipLocationChange: true});
  }
}
