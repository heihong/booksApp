import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { BookComponent } from './book/book.component';
import {OfferService} from '../services/offer/offer.service';

@NgModule({
  declarations: [CartComponent, BookComponent],
  providers: [OfferService],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
