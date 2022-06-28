import { Product } from './../product';
import { CartService } from '../services/cart.service';

import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import {
  addtoWishList,
  removeFormWishListById,
} from '../store/wish-list.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  inWishList: boolean = false;

  constructor(
    private cartService: CartService,
    private store: Store<{ wishList: [] }>
  ) {}

  ngOnInit(): void {}

  @Input() product: Product = {} as Product;

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  toggleWishList(id: number, img: string, title: string) {
    if (!this.inWishList) {
      this.inWishList = true;
      this.store.dispatch(addtoWishList({ id, img, title }));
    } else {
      this.inWishList = false;
      this.store.dispatch(removeFormWishListById({ id }));
    }
  }
}
