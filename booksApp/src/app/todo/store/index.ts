import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { todosReducer } from './todo-list.reducer';
import { TodoListState  } from '../../models/todo.model';
import {bookReducer} from '../../books/store/books.reducer';
import {BooksState} from '../../models/book.model';

// Le root reducer
const reducers = {
 // todos: todosReducer,
  books: bookReducer
};

export interface AppState {
//  todos: TodoListState;
  books: BooksState;
}
// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
