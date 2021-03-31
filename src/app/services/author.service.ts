import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Author } from '../models/author';
import { delay, map } from 'rxjs/operators';


declare var require: any

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorSubject$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([]);
  public authors$ = this.authorSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => {
        this.authorSubject$.next(require('../../lists/authors-list.json'))
      });
  }

  add(a: Author) {
    this.authorSubject$.getValue().push(a);
  }

  remove(i: number) {
    let authors = this.authorSubject$.getValue();
    if (i >= 0 && i <= authors.length)
      authors.splice(i, 1);
  }

  get(i: number): Observable<Author> {
    return this.authors$.pipe(
      map(authors => (i >= 0 && i <= authors.length) ? authors[i] : null),
      delay(1000)
    );
  }
}
