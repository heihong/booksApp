import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from '../../models/book.model';
import {CartData} from '../../services/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;
  @Output() updateParentData = new EventEmitter<string>();

  private removeBook: String = "remove from cart";

  constructor(private cartData : CartData){

  }

  removeToCart(index) :void {
    this.cartData.cart.splice(index, 1);
    this.updateParentData.emit('complete');
  }

}
