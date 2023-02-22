import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../IProduct';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = {} as IProduct;
  id: number = 0;
  // CS = new CartService(); - works like this or with the private CS below

  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart() {
    alert("Your item was put in the cart!")
    this.CS.addToCart(this.product);
  }

  ngOnInit() : void {
    this.route.params.subscribe(( params:Params ) => {
      this.id = +params['productID'];
      this.product = products[this.id];
    })
  }
}
