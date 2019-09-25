import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {BooksService} from '../books.service';
import {BookListModule} from './books.action';

@Injectable()
export class BooksEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookListModule.ActionTypes.INIT_BOOKS),
    mergeMap(() => this.booksService.getBooks()
      .pipe(
        map(books => ( new BookListModule.LoadBooks(books))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}
