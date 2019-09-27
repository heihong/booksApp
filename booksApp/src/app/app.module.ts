import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {BooksModule} from './containers/books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
