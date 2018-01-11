import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './app.routes';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
