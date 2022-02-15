import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../model/product-model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.httpClient.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${environment.url_api}/products/${id}`);

  }
}

// products: Product[] = [
//     {estaba lista de productos quemados}
//   ];
// getAllProducts() {
//   return this.
// }
// getProduct(id: string) {
//   return this.products.find(item => id === item.id);
// }
