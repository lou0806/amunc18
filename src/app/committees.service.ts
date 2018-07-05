import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Committee } from './committees';
import {CommitteesComponent} from './committees/committees.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CommitteesService {

  private committeesUrl = 'api/committees';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  getCommittees (): Observable<Committee[]> {
    return this.http.get<Committee[]>(this.committeesUrl);
  }

  getCommittee(no: number): Observable<Committee> {
    const url = `${this.committeesUrl}/${no}`;
    return this.http.get<Committee>(url);
  }
}
