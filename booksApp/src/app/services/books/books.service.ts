import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../../models/book.model";

@Injectable()
export class BooksService {

   booksUrl = 'api/books';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(this.booksUrl);
  }

}
