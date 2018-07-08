import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PassSecondsService {

  seconds: number;

  setSeconds(input: number) {
    this.seconds = input;
  }

  getSeconds(): Observable<number> {
    return of(this.seconds);
  }
}
