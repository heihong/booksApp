import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {CartData} from '../cartData/cartData';
import {BookComponent} from '../books/book/book.component';
import {OfferService} from '../services/offer/offer.service';

describe('CartComponent', () => {
  let cartComponentInstance: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartData : CartData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, BookComponent ],
      providers: [CartData, OfferService]
    })
    .compileComponents();
  }));

  let bookData = [
    {
      "id": 1,
      "title": "Henri Potier à l'école des sorciers",
      "price": 35
    },
    {
      "id": 2,
      "title": "Henri Potier et la Chambre des secrets",
      "price": 30
    }
  ];

  beforeEach(() => {
    cartData = TestBed.get(CartData);
    fixture = TestBed.createComponent(CartComponent);
    cartComponentInstance = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(cartComponentInstance).toBeTruthy();
  });



  let offers = [
    {
      "type": "percentage",
      "value": 5
    },
    {
      "type": "minus",
      "value": 15
    },
    {
      "type": "slice",
      "sliceValue": 100,
      "value": 12
    }
  ];



  it('should return total', ()  =>{
    expect(cartComponentInstance.total(bookData)).toEqual(65);
  })



  it('should return the result for each offer', ()  =>{
    cartComponentInstance.totalCart = 65;
    let result = [{calcul : 61.75 , type :'percentage'},
      {calcul : 50 , type :'minus'},
      {calcul : 65 , type :'slice'}];

    expect(cartComponentInstance.getResultOffers(offers)).toEqual(result);
  })

  it('should return the best offer', ()  =>{
    let resultOffer = [{calcul : 61.75 , type :'percentage'},
      {calcul : 50 , type :'minus'},
      {calcul : 65 , type :'slice'}];
    let result =  { calcul: 50, type: 'minus' };
    expect(cartComponentInstance.getBestOffer(resultOffer)).toEqual(result);
  })

  it('should clean the cart', ()  =>{
    cartData.cart = bookData;
    cartComponentInstance.clearCart();
    expect(cartData.cart.length).toEqual(0);
  })

  it('should return -5%', ()  =>{
    expect(cartComponentInstance.textPercentage(5)).toEqual('-5%');
  })

  it('should return -5', ()  =>{
    expect(cartComponentInstance.textMinus(5)).toEqual('-5');
  })

  it('should return -5 for each 100', ()  =>{
    expect(cartComponentInstance.textSlice(5, 100)).toEqual('-5 for each 100');
  })

  it('should return -5%', ()  =>{
    expect(cartComponentInstance.getTextDiscount('percentage')).toEqual('-5%');
  })

  it('should return -15', ()  =>{
    expect(cartComponentInstance.getTextDiscount('minus')).toEqual('-15');
  })

  it('should return -12 for each 100', ()  =>{
    expect(cartComponentInstance.getTextDiscount('slice')).toEqual('-12 for each 100');
  })


});
