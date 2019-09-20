import { TodoListModule } from './todo-list.action';
import { TodoListState  } from '../../models/todo';
import { todosMock } from '../../memoryData/todo-list';

// les valeurs par défaut du state
const initialState: TodoListState = {
  data: [],
  loading: false,
  loaded: false
};

// la fonction reducer de la todo
export function todosReducer(
  state: TodoListState = initialState,
  action: TodoListModule.Actions
): TodoListState {

  switch (action.type) {
    // L'action de InitTodos
    case TodoListModule.ActionTypes.INIT_TODOS :
      return {
        ...state,
        data: [
          ...todosMock // Injecte le mock
        ]
      };

    default:
      return state;
  }
}
