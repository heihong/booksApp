import {Book} from "../../models/book.model";

export class CartService {
  private cart: Book[] = [];

  getCart() {
    return this.cart.slice();
  }

  addToCart(book): void {
    this.cart.push(book);
  }

  removeToCart(index): Book[] {
    this.cart.splice(index, 1);
    return this.cart;
 }

}
