import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [CartComponent, BookComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
