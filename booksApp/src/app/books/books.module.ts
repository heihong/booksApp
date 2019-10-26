import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {FilterPipe} from '../services/pipe/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from "../memoryData/InMemoryBooksService";
import {CartData} from '../cartData/cartData';
import {BooksService} from '../services/books/books.service';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [BooksComponent , FilterPipe, BookComponent, CreateBookComponent],
  providers: [CartData, BooksService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBooksService, { dataEncapsulation: false },
    )
  ]
})
export class BooksModule { }
