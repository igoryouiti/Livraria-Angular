import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  categories$: Observable<Category[]>;
  authors$: Observable<Author[]>;

  constructor(
    private categoryService: CategoryService,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.categories$;
    this.authors$ = this.authorService.authors$;
  }

}
