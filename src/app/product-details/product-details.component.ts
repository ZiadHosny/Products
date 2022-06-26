import { CartService } from './../cart.service';
import { ProductApiService } from './../product-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  apiService: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productApiService: ProductApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService = this.productApiService
      .getProductById(this.productId)
      .subscribe((e) => {
        this.product = e;
      });
  }

  ngOnDestroy(): void {
    this.apiService.unsubscribe();
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
