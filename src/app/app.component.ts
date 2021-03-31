import { Component } from '@angular/core';
import { Author } from './models/author';
import { Book } from './models/book';
import { Category } from './models/category';

declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livraria2021';


  constructor() {

  }
}
