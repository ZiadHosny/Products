import { CartService } from './../cart.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  @Input() product: any;

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
