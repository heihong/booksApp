import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from '../../models/book.model';
import {CartData} from '../../cartData/cartData';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;

  private addBook: String = "add to cart";

  constructor(private cartData : CartData){

  }

  addToCart(book): void {
    this.cartData.cart.push(book);
  }

}
