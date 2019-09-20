import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {BookListEffects} from './book.effect';
import {BookListStateEntity, booksReducer} from './book.reducer';

// Le root reducer
const reducers = {
  books: booksReducer
};
export function AppState() {
}

export interface AppState {
  books: BookListStateEntity;
}

// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export  const  appEffects = [BookListEffects];
