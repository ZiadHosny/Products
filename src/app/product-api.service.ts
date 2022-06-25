import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    //return this.http.get('https://fakestoreapi.com/products');
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    // return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
