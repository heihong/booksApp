import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {combineReducers, StoreModule} from '@ngrx/store';
import { getReducers, REDUCER_TOKEN } from './todo/store';
import { ReactiveFormsModule, FormsModule } from  '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {BooksModule} from './books/books.module';
import {TodoModule} from './todo/todo.module';
import {todosReducer} from './todo/store/todo-list.reducer';
import {bookReducer} from './books/store/books.reducer';

export function reducer( state:any, action: any){
  return combineReducers({
   // todos : todosReducer,
    books : bookReducer
  })(state, action);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    CartModule,
    BooksModule,
    TodoModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
