import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { BooksComponent } from "./books/books.component";
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component : BooksComponent},
  {path: 'cart', component : CartComponent},
  {path: 'todo', component : TodoComponent}
];

//RouterModule.forRoot(routes,  { enableTracing: true } show the state in the console
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
