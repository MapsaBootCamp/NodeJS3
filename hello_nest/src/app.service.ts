import { Injectable } from '@nestjs/common';
import { Todo } from './app.interface';

@Injectable()
export class AppService {
  private todos: Todo[] = [];

  getAllTask(): Todo[] {
    return this.todos;
  }

  createTask(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}
