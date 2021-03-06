import { LoaderService } from './../services/loader.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { Store } from '@ngrx/store';
import { removeFormWishListByIndex } from '../store/wish-list.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  apiService: any;
  constructor(
    private productApiService: ProductApiService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.apiService = this.productApiService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnDestroy(): void {
    this.apiService.unsubscribe();
  }
}
