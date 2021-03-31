import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Category } from '../models/category';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categorySubject$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  public categories$ = this.categorySubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => this.categorySubject$.next(
        require('../../lists/categories-list.json')
      ));
  }

  add(a: Category) {
    this.categorySubject$.getValue().push(a);
  }

  remove(i: number) {
    let categories = this.categorySubject$.getValue();
    if (i >= 0 && i <= categories.length)
      categories.splice(i, 1);
  }

  get(i: number): Observable<Category> {
    return this.categories$.pipe(
      map(categories => (i >= 0 && i <= categories.length) ? categories[i] : null),
      delay(1000)
    );
  }
}
