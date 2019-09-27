import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {FilterPipe} from '../../services/pipe/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from "../../memoryData/InMemoryBooksService";
import {CartData} from '../../cartData/cartData';
import {BooksService} from '../../services/books/books.service';
import { BookComponent } from '../../components/book/book.component';

@NgModule({
  declarations: [BooksComponent , FilterPipe, BookComponent],
  providers: [CartData, BooksService],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBooksService, { dataEncapsulation: false },
    )
  ]
})
export class BooksModule { }