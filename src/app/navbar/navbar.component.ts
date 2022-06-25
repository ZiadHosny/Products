import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart: number = 0;

  constructor(private cartService: CartService) {
    cartService.cartCount().subscribe((e) => {
      this.cart = e;
    });
  }
  ngOnInit(): void {}
}
