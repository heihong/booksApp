import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import {CartData} from "../../cartData/cartData";
import {Book} from '../../models/book.model';

describe('BookComponent', () => {
  let bookComponentInstance: BookComponent;
  let bookComponent: ComponentFixture<BookComponent>;
  let cartData : CartData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [CartData]
    })
    .compileComponents();
  }));

  const bookData: Book = {
    "id": 1,
    "title": "Henri Potier à l'école des sorciers",
    "price": 35
  };

  beforeEach(() => {
    cartData = TestBed.get(CartData);
    bookComponent = TestBed.createComponent(BookComponent);
    bookComponentInstance = bookComponent.componentInstance;
    bookComponentInstance.book = bookData;
    bookComponent.detectChanges();
  });

  it('should create', () => {
    expect(bookComponentInstance).toBeTruthy();
  });

  it('should remove one element', ()  =>{

    cartData.cart = [
      {
        "id": 1,
        "title": "Henri Potier à l'école des sorciers",
        "price": 35
      },
      {
        "id": 2,
        "title": "Henri Potier et la Chambre des secrets",
        "price": 30
      }];
    let result = [{
      "id": 1,
      "title": "Henri Potier à l'école des sorciers",
      "price": 35
    }];
    bookComponentInstance.removeToCart(1);
    expect(cartData.cart.length).toEqual(1);
    expect(cartData.cart).toEqual(result);
  })


});
