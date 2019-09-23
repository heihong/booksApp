import { Store, select } from  '@ngrx/store';
import { OnInit, Component, Inject } from  '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Observable } from  'rxjs/Observable';
import { TodoListModule } from  './store/todo-list.action';
import { AppState } from  './store';
import { selectTodos$ } from  './store/selectors/todo-list.selector';
import {Todo} from '../models/todo.model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template:  `
      <h1>la todolist redux style !</h1>
      <form [formGroup]="todoForm" (ngSubmit)="createTodo(todoForm.value)">
          <label>Titre :</label>
          <input type="text" formControlName="title" placeholder="Title"/>
          <label>Est-elle terminé ? :</label>
          <input type="checkbox" formControlName="completed"/>
          <button>Créer</button>
      </form>
      <ul>
          <li *ngFor="let todo of todos$ | async">
              <label>{{ todo.title }}</label>
              <input type="checkbox" [ngModel]="todo.completed"/>
              <button (click)="deleteTodo(todo.id)">Supprimer</button>
          </li>
      </ul>
  `
})
export class TodoComponent implements OnInit {

  todos$: Observable<Todo[]>;
  public  todoForm: FormGroup;
  private todoslength : number;

  constructor(
    private  store: Store<AppState>,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.todos$ = store
      .pipe(
        select(selectTodos$),
        tap((todos) => {
          this.todoslength = todos.length;
        })
      );
    this.todoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });
  }

  createTodo(todo: Todo) {
    const payload = {
      ...todo,
      userId: 1,
      id: this.todoslength + 1
    };

    this.store.dispatch(new  TodoListModule.CreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }

  ngOnInit() {
    this.store.dispatch(new  TodoListModule.InitTodos());
  }



}
