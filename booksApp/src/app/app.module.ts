import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterPipe} from './services/pipe/filter.pipe';
import {CartService} from './services/cart/cart.service';
import {BooksService} from './services/books/books.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from './memoryData/InMemoryBooksService';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './books/book/book.component';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CartComponent} from './cart/cart.component';
import {BookCartComponent} from './cart/book/book-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    FilterPipe,
    BookComponent,
    CreateBookComponent,
    CartComponent,
    BookCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBooksService, { dataEncapsulation: false },
    )
  ],
  providers: [CartService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
