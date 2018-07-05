import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { catchError, map, tap } from 'rxjs/operators';

import {Member} from './member';
import {MessageService} from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; // define special header in HTTP save requests

@Injectable({
  providedIn: 'root'
})

export class MemberService {

  private membersUrl = 'api/members'; // Url to web api, define the location of database

  constructor(
    private http: HttpClient,
    private messageService: MessageService, /*Declares private property, injects MessageService into that property
                                            when MemberService is created, service-in-service*/
  ) { }

  getMembers(): Observable<Member[]> { /*of() returns an Observable<[]> that emits a single value, the array*/
    return this.http.get<Member[]>(this.membersUrl)
      .pipe( // to catch errors we pipe observable result from http.get()through an RxJS catchError operator
        tap(members => this.log(`fetched member states`)),
        catchError(this.handleError('getMembers', []))
      );
  }

  getMember(id: number): Observable<Member> { // get member state by id (string is another function)
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member state id = ${id}`)),
      catchError(this.handleError<Member>(`getMember id = ${id}`))
    );
  } /*it constructs a request URL with the desired hero's id. The server should respond with a single hero rather than
    an array of heroes. Therefore, getHero returns an Observable<Hero> ("an observable of Hero objects") rather than an
    observable of hero arrays . */

  /** PUT: update the member state on the server **/
  updateMember (member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, httpOptions).pipe(
      tap(_ => this.log(`updated member id = ${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  } // important, since the URL is Unchanged since we care about the ID of the member state

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, httpOptions).pipe(
      tap((member: Member) => this.log(`added member w/ id=${member.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }

/*  deleteMember(member: Member | number): Observable<Member> {
    const id = typeof Member === 'number' ? member : member.id;
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, httpOptions).pipe(
      tap(_ => this.log (`deleted member id = ${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }*/

  searchMembers(term: string): Observable<Member[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Member[]>(`${this.membersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found members matching "${term}"`)),
      catchError(this.handleError<Member[]>('searchMembers', []))
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
