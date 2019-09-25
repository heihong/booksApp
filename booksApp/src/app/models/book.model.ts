export interface Book{
  id: number;
  title: string;
  price: number;
  synopsis: string[];
}


export interface BooksState {
  data: Book[];
}
