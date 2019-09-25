import {Book, BooksState} from '../../models/book.model';
import {BookListModule} from './books.action';

const initState: BooksState = {
  data: []
};

export function bookReducer(
  state: BooksState = initState,
  action: BookListModule.Actions
): BooksState {
  switch (action.type) {
    case BookListModule.ActionTypes.LOAD_BOOKS:
      return {
        ...state,
        data: action.payload
      };
    case BookListModule.ActionTypes.ADD_BOOK:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case BookListModule.ActionTypes.DELETE_BOOK:
      return {
        ...state,
        data: state.data.filter(book => book.id !== action.payload )
      };
    case BookListModule.ActionTypes.RESET_BOOK:
      return {
        data: []
      };
    default:
      return state;
  }
}
