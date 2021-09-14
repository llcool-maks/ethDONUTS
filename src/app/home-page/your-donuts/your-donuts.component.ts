import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, HostListener, Renderer2 } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-donuts',
  templateUrl: './your-donuts.component.html',
  styleUrls: ['./your-donuts.component.scss']
})
export class YourDonutsComponent implements AfterContentInit {

  userDonuts = this.web3.userDonuts;
  mintedDonuts = this.web3.mintedDonuts;
  storedDonutCount = this.web3.storedDonutCount;
  currentPosition = 0;
  @ViewChild('yourDonuts') private yourDonuts: ElementRef;
  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event: MouseWheelEvent): void {
    this.scrollToElement(event.layerY);
  }

  constructor(
    private web3: Web3Service,
    private renderer: Renderer2,
    private router: Router
  ) { }

  scrollToElement(deltaY): void {
    const element = this.yourDonuts.nativeElement;
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
    // }
    if (Number(index) > this.mintedDonuts.getValue()) {
      return;
    }
    if (Number(index) < 0) {
      return;
    }
    this.router.navigateByUrl('donuts/' + Number(index), {skipLocationChange: true});
  }
}
