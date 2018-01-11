import {Observable} from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import {of} from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
	baseurl =  'http://localhost:3000';
  constructor(private http: HttpClient) {

  }


    getProducts(): Observable < Product[] > {
    	return this.http.get<Product[]>(this.baseurl + '/products');
    }

    getProduct(id: number): Observable < Product > {
    	return this.http.get<Product>(this.baseurl + 'products/$(id)');
    }

    addProduct(pruduct: Product){
      let options = this.setHeader();
      return this.http.post(this.baseurl, options);
    }

    deleteProduct(id: number){

    }

    updateProduct(id: number, product: Product){

    }

    setHeader(){
      let header = new Headers({'Content-Type': 'application/json'});
      return new RequestOptions({headers: header});

    }



}
