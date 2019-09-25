import {Book} from '../../models/book.model';

export namespace BookListModule {

  export enum ActionTypes {
    INIT_BOOKS = '[Books Page] Load Books',
    ADD_BOOK = '[[Books Page] Add Books',
    DELETE_BOOK = '[Books Page] Delete Books',
    RESET_BOOK = '[Books Page] Reset Books',
    LOAD_BOOKS = '[Books API] Book Loaded Success',
  }

  export class InitBooks {
    readonly type = ActionTypes.INIT_BOOKS;
  }

  export class LoadBooks {
    readonly type = ActionTypes.LOAD_BOOKS;

    constructor(public payload: Book[]) {
    }
  }

  export class AddBook {
    readonly type = ActionTypes.ADD_BOOK;

    constructor(public  payload: Book) {
    }
  }

  export class DeleteBook {
    readonly type = ActionTypes.DELETE_BOOK;

    constructor(public payload: number) {
    }
  }

  export class ResetBook {
    readonly type = ActionTypes.RESET_BOOK;
  }

  export type Actions = InitBooks
    | AddBook
    | DeleteBook
    | LoadBooks
    | ResetBook;
}
