import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  @Output() bookCreated = new EventEmitter<{title: string, price: number}>();
  title: string;
  price: number;
  constructor() { }

  ngOnInit() {
  }

  onCreatedBook() {
    this.bookCreated.emit({title: this.title, price: this.price});
  }

}
