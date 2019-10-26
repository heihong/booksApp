import { FilterPipe } from "./filter.pipe"

describe('FilterPipe', () => {
  let pipe : FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe()
  })

  it('should return Henri Potier et la Chambre des secrets', ()  =>{
    let books = [
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
      "id": 2,
      "title": "Henri Potier et la Chambre des secrets",
      "price": 30
    }];
    expect(pipe.transform(books, `Henri Potier et la Chambre des secrets`)).toEqual(result);
  });

  it('should return []', ()  =>{
    let books;
    expect(pipe.transform(books, `Henri Potier et la Chambre des secrets`)).toEqual([]);
  });

  it('should return books', ()  =>{
    let books = [
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
    expect(pipe.transform(books, '')).toEqual(books);
  });


})
