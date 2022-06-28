import { Product } from '../product';
import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: Product[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.getCarts().subscribe((e) => {
      this.carts = e;
    });
    this.cartService.getTotalPrice().subscribe((e) => {
      this.totalPrice = e;
    });
  }

  ngOnInit(): void {}

  remove(i: number, quantity: number) {
    this.cartService.removeFormCarts(i, quantity);
  }

  increase(index: number) {
    this.cartService.increase(index);
  }

  decrease(index: number) {
    this.cartService.decrease(index);
  }

  clear() {
    this.cartService.clear();
  }
}
