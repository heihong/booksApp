import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {FilterPipe} from './pipe/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryBooksService} from "./../memoryData/InMemoryBooksService";
import {CartData} from '../cartData/cartData';
import {BooksService} from './books.service';

@NgModule({
  declarations: [BooksComponent , FilterPipe],
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
