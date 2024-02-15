import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';
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
    return this.todoService.createTask({ ...todo, done: false, id: uuid4() });
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTask(id);
  }
}
