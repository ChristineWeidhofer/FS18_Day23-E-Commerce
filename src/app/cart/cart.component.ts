import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: Array<IProduct> = [];
  checkoutForm = this.FB.group( // eine neue Art, eine FormGroup zu erstellen
    {
      name: "",
      address: ""
    }
  )

  constructor(private CS: CartService, private FB: FormBuilder) {}

  clearCart() {
    alert('Your cart has been emptied');
    this.cart = this.CS.clearCart();
  }

  onSubmit() {
    alert('Your order has been submitted');
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.cart = this.CS.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
  }

}
