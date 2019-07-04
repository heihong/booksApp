import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { BookComponent } from './book/book.component';
import {CartData} from '../cartData/cartData';
import {OfferService} from '../offer/offer.service';

@NgModule({
  declarations: [CartComponent, BookComponent],
  providers: [CartData, OfferService],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
