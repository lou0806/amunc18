import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Committee } from './committees';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})

export class CommitteesService {

  private committeesUrl = 'api/committees';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCommittees (): Observable<Committee[]> {
    return this.http.get<Committee[]>(this.committeesUrl)
      .pipe(
        tap(members => this.log(`fetched Committees states`)),
        catchError(this.handleError('getCommittees', []))
      );
  }

  getCommittee(noId: number): Observable<Committee> {
    const url = `${this.committeesUrl}/${noId}`;
    return this.http.get<Committee>(url).pipe(
      tap(_ => this.log(`fetched committee number = ${noId}`)),
      catchError(this.handleError<Committee>(`getCommittee id=${noId}`))
    );
  }

  private log(message: string) {
    this.messageService.add('MemberService: ' + message); /* Keep injecting the MessageService. You'll call it so
                                                              frequently that you'll wrap it in private log method.*/
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
