import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { HttpClient } from '@angular/common/http';
import { CartData } from "../../cartData/cartData";
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private http: HttpClient , private booksService: BooksService, private cartData : CartData){

  }

  private books : Book[];

  ngOnInit(){
    this.booksService.getBooks()
      .subscribe((data) =>
        this.books = data
      );
  }

}
