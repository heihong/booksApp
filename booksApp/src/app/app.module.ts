import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {appEffects, getReducers, REDUCER_TOKEN} from './cart/store/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {BooksModule} from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[DEMOANGULAR]',
      maxAge: 25, // Retains last 25 states
    }),
    CartModule,
    BooksModule
  ],
  providers: [ {provide: REDUCER_TOKEN, useFactory: getReducers}],
  bootstrap: [AppComponent]
})
export class AppModule { }
