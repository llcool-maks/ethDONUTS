import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  donutBoxNav: BehaviorSubject<ElementRef> = new BehaviorSubject(undefined);
  yourDonutsNav: BehaviorSubject<ElementRef> = new BehaviorSubject(undefined);

  constructor(
  ) { }

  getSelectors(): any {
    return {
      donutBoxNav: this.donutBoxNav,
      yourDonutsNav: this.yourDonutsNav,
    };
  }
}
