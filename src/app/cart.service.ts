import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartsCount = 0;
  private carts: any[] = [];
  private totalPrice = 0;

  private cartsCountSubject: BehaviorSubject<number>;
  private totalPriceSubject: BehaviorSubject<number>;
  private cartsSubject: BehaviorSubject<any[]>;

  constructor() {
    this.cartsCountSubject = new BehaviorSubject(this.cartsCount);
    this.totalPriceSubject = new BehaviorSubject(this.totalPrice);
    this.cartsSubject = new BehaviorSubject(this.carts);
  }

  cartCount(): Observable<number> {
    return this.cartsCountSubject.asObservable();
  }
  getCarts(): Observable<any> {
    return this.cartsSubject.asObservable();
  }
  getTotalPrice(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

  increment() {
    this.cartsCount++;
    this.cartsCountSubject.next(this.cartsCount);
  }
  decrement(i = 1) {
    this.cartsCount -= i;
    this.cartsCountSubject.next(this.cartsCount);
  }

  addToCart(product: any) {
    let cart = this.carts.find((pro: any) => {
      return pro.id == product.id;
    });

    if (cart) {
      cart.quantity++;
    } else {
      this.carts.push({
        id: product.id,
        quantity: 1,
        title: product.title,
        price: product.price,
        image: product.images[0],
      });
    }

    this.cartsSubject.next(this.carts);
    this.increment();
    this.updateTotalPrice();
  }
  removeFormCarts(index: number, quantity: number) {
    this.decrement(quantity);
    this.carts.splice(index, 1);
    this.cartsSubject.next(this.carts);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = 0;
    this.carts.forEach((e) => {
      this.totalPrice += e.quantity * e.price;
    });
    this.totalPriceSubject.next(this.totalPrice);
  }

  increase(id: any) {
    let cart = this.carts.find((pro: any) => {
      return pro.id == id;
    });

    cart.quantity = cart.quantity + 1;

    this.updateTotalPrice();
    this.increment();
  }

  decrease(id: any, index: number) {
    let cart = this.carts.find((pro) => {
      return pro.id == id;
    });

    if (cart.quantity > 1) {
      cart.quantity = cart.quantity - 1;
      this.updateTotalPrice();
      this.decrement();
    } else {
      this.removeFormCarts(index, cart.quantity);
    }
  }
}
