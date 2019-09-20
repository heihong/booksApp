import { Store, select } from '@ngrx/store';
import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoListModule } from './store/todo-list.action';
import { AppState } from './store';
import { Todo } from './../models/todo';


@Component({
  selector: 'todo',
  template: `
    <h1>la todolist redux style !</h1>
    <ul>
		<li *ngFor="let todo of (todos$ | async)?.data">
			<label>{{ todo.title }}</label>
			<input type="checkbox" [value]="todo.completed"/>
			<button>Supprimer</button>
		</li>
	</ul>
  `
})
export class TodoComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.todos$ = store.pipe(select('todos'));

    /* A éviter
	this.todo$.subscribe((todos) => {
		this.todos = todos;
	});

    Dans ce cas de figure, pas de mutation sur la liste
    de todos dans le component, inutile de faire un subscribe.
    Cela évite également de faire un unsubscribe dans le OnDestroy
    et utiliser un *ngIf dans le <ul> dans le cas ou la donnée est vide.
	*/

  }

  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
  }

}
