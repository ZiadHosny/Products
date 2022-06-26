import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  apiService: any;
  constructor(private productApiService: ProductApiService) {}

  ngOnInit(): void {
    this.apiService = this.productApiService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnDestroy(): void {
    this.apiService.unsubscribe();
  }
}
