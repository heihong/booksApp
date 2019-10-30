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
  @Input() index: number;
  @Output() onBookDeleted = new EventEmitter<number>();

  private removeBook: String = "remove from cart";

  constructor(private cartService: CartService) {}

  removeToCart(): void {
   this.onBookDeleted.emit(this.index);
  }

}
