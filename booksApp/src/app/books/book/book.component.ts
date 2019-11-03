import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from '../../models/book.model';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;
  @Output() onBookAdded = new EventEmitter<Book>()

  private addBook: String = "add to cart";

  constructor(private cartService: CartService) {}

  addToCart(bookData: Book) {
    this.onBookAdded.emit(bookData);
  }

}
