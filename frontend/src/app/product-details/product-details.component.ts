import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product} from '../product'
import { ActivatedRoute, Params} from '@angular/router';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {
	product: Product;
	productId: number;
  constructor(private postService: ProductService) { }

  ngOnInit() {
  	
  }


}
