import { Product } from './../product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartsCount = 0;
  private carts: Product[] = [];
  private totalPrice = 0;

  private cartsCountSubject: BehaviorSubject<number>;
  private totalPriceSubject: BehaviorSubject<number>;
  private cartsSubject: BehaviorSubject<Product[]>;

  constructor() {
    this.cartsCountSubject = new BehaviorSubject(this.cartsCount);
    this.totalPriceSubject = new BehaviorSubject(this.totalPrice);
    this.cartsSubject = new BehaviorSubject(this.carts);
  }

  cartCount(): Observable<number> {
    return this.cartsCountSubject.asObservable();
  }
  getCarts(): Observable<Product[]> {
    return this.cartsSubject.asObservable();
  }
  getTotalPrice(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

  increment() {
    this.cartsCount++;
    this.cartsCountSubject.next(this.cartsCount);
  }
  decrement(quantity = 1) {
    this.cartsCount -= quantity;
    this.cartsCountSubject.next(this.cartsCount);
  }

  addToCart(product: Product) {
    let cart = this.carts.find((pro: Product) => {
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
        images: product.images,
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

  increase(index: number) {
    this.carts[index].quantity++;
    this.updateTotalPrice();
    this.increment();
  }

  decrease(index: number) {
    if (this.carts[index].quantity > 1) {
      this.carts[index].quantity--;
      this.updateTotalPrice();
      this.decrement();
    } else {
      this.removeFormCarts(index, this.carts[index].quantity);
    }
  }

  clear() {
    this.cartsCount = 0;
    this.carts = [];
    this.totalPrice = 0;
    this.cartsCountSubject.next(0);
    this.totalPriceSubject.next(0);
    this.cartsSubject.next([]);
  }
}
