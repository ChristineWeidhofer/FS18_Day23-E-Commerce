import { Component } from '@angular/core';
import { products } from '../products';
import { IProduct } from '../IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Array<IProduct> = products;

}
