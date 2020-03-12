import * as ACTIONTYPES from '../Actions/ActionTypes';
import { combineReducers } from 'redux';

export const initialTodos = [
    {id: 1, task: 'React', completed: false},
    {id: 2, task: 'Vue', completed: false}
]

export const TodosReducer = (todos = initialTodos, action) => {
    switch(action.type){
        case ACTIONTYPES.ADDTODO:
            return [...todos, {id: 3, task: action.newTodo, completed: false}]
        case ACTIONTYPES.REMOVETODO:
            return todos.filter(todo => todo.id !== action.todoId)
        case ACTIONTYPES.TOGGLETODO:
            return todos.map(todo => todo.id === action.todoId ? {...todo, completed: !todo.completed} : todo)
        default:
            return todos
    }
}

export default combineReducers({
    Todos: TodosReducer
})
