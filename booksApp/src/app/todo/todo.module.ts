import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from './todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  providers: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class TodoModule { }
