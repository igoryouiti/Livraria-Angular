import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Book } from '../models/book';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => this.bookSubject$.next(
        require('../../lists/books-list.json')
      ));
  }

  add(a: Book) {
    this.bookSubject$.getValue().push(a);
  }

  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i <= books.length)
      books.splice(i, 1);
  }

  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (i >= 0 && i <= books.length) ? books[i] : null),
      delay(1000));
  }
}
