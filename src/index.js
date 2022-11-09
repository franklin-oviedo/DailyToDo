import {Todo, TodoList} from './classes/index';
import { crearTodoHtml } from './js/components';
import './styles.css';

export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml); 