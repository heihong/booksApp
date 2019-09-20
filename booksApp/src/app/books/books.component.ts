import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";

import {Observable} from "rxjs/Rx";
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { CartData } from "../cartData/cartData";
import {Book} from "../models/book.model";
import {AppState} from './../cart/store/index';
import {selectBookListEntitiesConverted$} from "../cart/store/book.selector";
import {BookListModule} from "../cart/store/book.actions";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books$: Observable<Book[]>;

  constructor(private http: HttpClient , private booksService: BooksService, private cartData : CartData, private store: Store<AppState>){
    this.books$ = store
      .pipe(select(selectBookListEntitiesConverted$));

  }

  ngOnInit() {
    this.store.dispatch(new BookListModule.LoadInitBook());
  }

}
