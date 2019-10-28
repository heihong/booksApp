import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {FilterPipe} from './services/pipe/filter.pipe';
import {CartData} from './services/cart/cart.service';
import {BooksService} from './services/books/books.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from './memoryData/InMemoryBooksService';
import {BooksModule} from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    BooksModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBooksService, { dataEncapsulation: false },
    )
  ],
  providers: [CartData, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
