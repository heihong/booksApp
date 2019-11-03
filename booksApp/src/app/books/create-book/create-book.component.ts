import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  @Output() onBookCreated = new EventEmitter<{title: string, price: number}>();
  bookForm = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCreatedBook() {
    this.onBookCreated.emit(this.bookForm.value);
    this.bookForm.reset();
  }

}
