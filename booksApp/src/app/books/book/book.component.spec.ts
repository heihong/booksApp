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
      "price": 35,
      "synopsis": [
        "Après la mort de ses parents"
      ]
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

  it('should add to cart', ()  =>{
    cartData.cart = [
      {
        "id": 1,
        "title": "Henri Potier à l'école des sorciers",
        "price": 35,
        "synopsis": [
          "Après la mort de ses parents"
        ]
      },
      {
        "id": 2,
        "title": "Henri Potier et la Chambre des secrets",
        "price": 30,
        "synopsis": [
          "Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison."
        ]
      }];
    let book = {
      "id": 3,
      "title": "Henri Potier et la Coupe de feu",
      "price": 29,
      "synopsis": [
        "Juste avant d'assister à la coupe du Monde ",
      ]
    };
    bookComponentInstance.addToCart(book);
    expect(cartData.cart.length).toEqual(3);
  });

});