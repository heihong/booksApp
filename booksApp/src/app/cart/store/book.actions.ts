import {Book} from '../../models/book.model';

export namespace BookListModule {

  export enum ActionTypes {
    LOAD_INIT_BOOKS= '[bookList] Load Init Books',
    ADD_BOOK= 'add book'

  }

  export  class  LoadInitBook {
    readonly  type = ActionTypes.LOAD_INIT_BOOKS;
  }

  export class AddBook {
    readonly  type = ActionTypes.ADD_BOOK;
    constructor( public payload: Book[]) {}
  }

  export type Actions = AddBook;

}



