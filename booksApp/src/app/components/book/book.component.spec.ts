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
      "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
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
        "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        "title": "Henri Potier à l'école des sorciers",
        "price": 35,
        "synopsis": [
          "Après la mort de ses parents"
        ]
      },
      {
        "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
        "title": "Henri Potier et la Chambre des secrets",
        "price": 30,
        "synopsis": [
          "Henri Potier passe l'été chez les Dursley et reçoit la visite de Dobby, un elfe de maison."
        ]
      }];
    let book = {
      "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
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