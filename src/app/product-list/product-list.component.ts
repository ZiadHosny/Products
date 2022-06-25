import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productApiService: ProductApiService) {}

  ngOnInit(): void {
    this.productApiService.getProducts().subscribe((e) => {
      this.products = e;
    });
  }
}