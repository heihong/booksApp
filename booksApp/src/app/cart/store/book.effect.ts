import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs/Observable';
import {BooksService} from '../../books/books.service';
import {BookListModule} from './book.actions';

@Injectable()
export  class  BookListEffects {
  @Effect() AddBook$: Observable<BookListModule.Actions> = this.actions$
    .pipe(
      ofType(BookListModule.ActionTypes.ADD_BOOK),
    );

  constructor(
    private  bookListService: BooksService,
    private  actions$: Actions,
  ) {}
}
