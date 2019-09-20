import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { getReducers, REDUCER_TOKEN } from './todo/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {BooksModule} from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    CartModule,
    BooksModule
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
