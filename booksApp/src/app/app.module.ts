import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {BooksComponent} from './containers/books/books.component';
import {FilterPipe} from './services/pipe/filter.pipe';
import {BookComponent} from './components/book/book.component';
import {CartData} from './cartData/cartData';
import {BooksService} from './services/books/books.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from './memoryData/InMemoryBooksService';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent ,
    FilterPipe,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBooksService, { dataEncapsulation: false },
    )
  ],
  providers: [CartData, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
