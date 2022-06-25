import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: any;
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

  remove(i: any, quantity: any) {
    this.cartService.removeFormCarts(i, quantity);
  }

  increase(id: any) {
    this.cartService.increase(id);
  }

  decrease(id: any, index: number) {
    this.cartService.decrease(id, index);
  }
}
