import * as fromBooks from './book.reducer';
import {AppState} from './index';
import {createSelector} from '@ngrx/store';
export { selectBooks } from './book.reducer';

// La première fonction amène vers le state matieres
export const selectBookListState$ = (state: AppState) =>  state.books;

export const selectBookListEntitiesConverted$ = createSelector(
  selectBookListState$,
  fromBooks.selectBooks);

export  const  selectBooksLoading$ =
  createSelector(selectBookListState$, (books) =>  books);

