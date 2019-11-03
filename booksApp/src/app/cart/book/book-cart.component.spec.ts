import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCartComponent } from './book-cart.component';
import {CartService} from '../../services/cart/cart.service';
import {Book} from '../../models/book.model';

describe('BookCartComponent', () => {
  let bookComponentInstance: BookCartComponent;
  let bookComponent: ComponentFixture<BookCartComponent>;
  let cartService : CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCartComponent ],
      providers: [CartService]
    })
    .compileComponents();
  }));

  const bookData: Book = {
    "id": 1,
    "title": "Henri Potier à l'école des sorciers",
    "price": 35
  };

  beforeEach(() => {
    cartService = TestBed.get(CartService);
    bookComponent = TestBed.createComponent(BookCartComponent);
    bookComponentInstance = bookComponent.componentInstance;
    bookComponentInstance.book = bookData;
    bookComponent.detectChanges();
  });

  it('should create', () => {
    expect(bookComponentInstance).toBeTruthy();
  });


});
