import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<IProduct> = [];

  constructor() { }

  addToCart(something: IProduct) {
    this.cart.push(something);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}