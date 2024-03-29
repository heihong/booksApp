import { Component, OnInit } from '@angular/core';
import { OfferService} from "../services/offer/offer.service";

import {Offer} from '../models/offer.model';
import {CartService} from '../services/cart/cart.service';
import {Book} from '../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {

  private offers: Offer[] = [
    {
      type: 'percentage',
      value: 5
    },
    {
      type: 'minus',
      value: 15
    },
    {
      type: 'slice',
      sliceValue: 100,
      value: 12
    }
  ];

  public totalCart: number;
  private cart: Book[];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
   // this.updateData();
    this.cart = this.cartService.getCart();
  }

  removeToCart(indexData): void {
    this.cart = this.cartService.removeToCart(indexData);
  }
/*  updateData() : void {
    this.totalCart = this.total(this.cartService.getCart());
    this.resultOffers = this.getResultOffers(this.offers);
    this.bestOffer = this.getBestOffer(this.resultOffers);
    this.textDiscount = this.getTextDiscount(this.bestOffer.type);
  }


  total(books): number {
    return books.reduce((acc, b) => acc + b.price, 0);
  }


  getResultOffers(offers) : resultOffer[]{
    let resultOffers = [];
    let result = {calcul:-1,
      type : ''
    };
    for (let i = 0; i < offers.length; i++) {
      switch (offers[i].type) {
        case 'percentage':
          result.calcul = this.offerService.calculPercentage(this.totalCart, offers[i].value);
          break;
        case 'minus':
          result.calcul = this.offerService.calculMinus(this.totalCart, offers[i].value);
          break;
        case 'slice':
          result.calcul = this.offerService.calculSlide(this.totalCart, offers[i].value, offers[i].sliceValue);
          break;

      }
      result.type = offers[i].type;
      let resultCopy = Object.assign({}, result);
      resultOffers.push(resultCopy);
    }
    return resultOffers;
  }

  getBestOffer(resultOffers) : resultOffer {
    return resultOffers.reduce((acc, val) => {
      if(acc.calcul === undefined || val.calcul < acc.calcul){
        acc.calcul = val.calcul;
        acc.type = val.type;
      }
      return acc;
    },{});
  }


  clearCart(): void {
    this.cartService.cart.splice(0, this.cartService.cart.length);
  }

  textPercentage(value): String {
    return `-${value}%`;
  }

  textMinus(value): String {
    return `-${value}`;
  }

  textSlice(value, sliceValue): String{
    return `-${value} for each ${sliceValue}`;
  }

  getTextDiscount(type): String {
    let bestOffer = this.offers.filter(el => el.type == type);

    switch (bestOffer[0].type) {
      case 'percentage':
        return this.textPercentage(bestOffer[0].value);

      case 'minus':
        return this.textMinus(bestOffer[0].value);

      case 'slice':
        return this.textSlice(bestOffer[0].value, bestOffer[0].sliceValue);


    }
  }*/

}
