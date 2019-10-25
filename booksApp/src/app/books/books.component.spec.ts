import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import {FilterPipe} from '../services/pipe/filter.pipe';
import {BookComponent} from './book/book.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CartData} from '../cartData/cartData';
import {BooksService} from '../services/books/books.service';
import {Book} from '../models/book.model';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let booksService : BooksService;
  let httpMock : HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        BooksComponent ,
        BookComponent,
        FilterPipe
      ],
      providers: [BooksService, CartData]
    });
  }));

  beforeEach(() => {
    booksService = TestBed.get(BooksService);
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const bookMockData : Book[] = [
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
    },
    {
      "id": 3,
      "title": "Henri Potier et le Prisonnier d'Azkaban",
      "price": 30,
      "synopsis": [
        "Durant l'été, pour son treizième",
      ]
    },
    {
      "id": 4,
      "title": "Henri Potier et la Coupe de feu",
      "price": 29,
      "synopsis": [
        "Juste avant d'assister à la coupe du Monde ",
      ]
    }
  ];

  it('should retrieve books from the API via GET', ()  =>{

    booksService.getBooks().subscribe(books=>{
      expect(books.length).toBe(4);
      expect(books).toEqual(bookMockData);
    })

    const request  = httpMock.expectOne(booksService.booksUrl);
    expect(request.request.method).toBe('GET');

    request.flush(bookMockData);

  });



});