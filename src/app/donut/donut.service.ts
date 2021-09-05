import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  public rarities = new BehaviorSubject(undefined);
  public metadata = new BehaviorSubject(undefined);

  constructor() { }

}
