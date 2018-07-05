import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  // Observable string sources
  private resetButtonSource = new Subject<boolean>();

  // Observable string streams
  resetButton$ = this.resetButtonSource.asObservable();

  buttonReset(input: boolean) {
    this.resetButtonSource.next(input);
  }

  constructor() { }
}
