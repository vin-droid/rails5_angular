import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
	products: Product [];
  constructor(private service: ProductService) { }

  ngOnInit() {
  	this.service.getProducts().subscribe(products => {
  		this.products = products;
  		console.log(this.products);
  	});
  }

}
