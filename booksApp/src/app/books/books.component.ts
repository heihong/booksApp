import { Component, OnInit } from '@angular/core';
import { Store, select } from  '@ngrx/store';
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { CartData } from "../cartData/cartData";
import {Book} from "../models/book.model";
import {Observable} from 'rxjs';
import {BookListModule} from './store/books.action';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<any> = this.store.select(state => state.data);
  constructor(private http: HttpClient , private booksService: BooksService, private cartData : CartData, private store: Store<{ data: Book[] }>) {
  }

  private books: Book[];

  ngOnInit() {
    this.store.dispatch(new BookListModule.InitBooks());
  }

}
