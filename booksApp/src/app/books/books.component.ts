import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { HttpClient } from '@angular/common/http';
import { CartData } from "../cartData/cartData";
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private http: HttpClient , private booksService: BooksService, private cartData : CartData){

  }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe((data) =>
        this.books = data
      );
  }

  onBookCreated(bookData: {title: string, price: number}) {
    this.books.push({
      id: this.books.toString().length,
      title: bookData.title,
      price: bookData.price
    });
  }



}
