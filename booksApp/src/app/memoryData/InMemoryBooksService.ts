import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root',
})
export class InMemoryBooksService implements InMemoryDbService {

  createDb() : {} {
    const books :Book[] = [
      {
        "id": 1,
        "title": "Henri Potier à l'école des sorciers",
        "price": 35
      },
      {
        "id": 2,
        "title": "Henri Potier et la Chambre des secrets",
        "price": 30
      },
      {
        "id": 3,
        "title": "Henri Potier et le Prisonnier d'Azkaban",
        "price": 30
      },
      {
        "id": 4,
        "title": "Henri Potier et la Coupe de feu",
        "price": 29
      },
      {
        "id": 5,
        "title": "Henri Potier et l'Ordre du phénix",
        "price": 28
      },
      {
        "id": 6,
        "title": "Henri Potier et le Prince de sang-mêlé",
        "price": 30
      },
      {
        "id": 7,
        "title": "Henri Potier et les Reliques de la Mort",
        "price": 35
      }
    ];
    return {books};
  }
}
