import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { TodoDto } from './todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(): Todo[] {
    return this.todoService.getAllTask();
  }

  @Post()
  createTodo(@Body() todo: TodoDto): Todo {
    return this.todoService.createTask({ ...todo, done: false });
  }
}
