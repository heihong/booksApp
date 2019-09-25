import { TodoListModule } from './todo-list.action';
import { TodoListState  } from '../../models/todo.model';
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
    case  TodoListModule.ActionTypes.CREATE_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      };
    case TodoListModule.ActionTypes.DELETE_TODO:
      return {
        ...state,
        data : state.data.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}