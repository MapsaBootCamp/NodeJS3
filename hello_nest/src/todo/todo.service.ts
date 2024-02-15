import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAllTask(): Todo[] {
    return this.todos;
  }

  createTask(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}
