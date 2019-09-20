import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Book} from '../../models/book.model';
import {BookListModule} from './book.actions';

export interface BookListStateEntity extends EntityState<Book> {
  selectBook: Book;
}

export const BookListAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  sortComparer: false
});


export const initialState: BookListStateEntity = BookListAdapter.getInitialState({
  selectBook: undefined
});

export const {
  selectAll: selectBooks
} = BookListAdapter.getSelectors();


export function booksReducer(
  state = initialState,
  action: BookListModule.Actions
): BookListStateEntity {
  switch (action.type) {
    case BookListModule.ActionTypes.ADD_BOOK:
      return {
        ...BookListAdapter.addMany(action.payload, state),
      };
    default:
      return state;
  }
}
