import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './todo.service';
import { Todo } from './todo.interface';
import { TodoDto } from './todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Todo[] {
    return this.appService.getAllTask();
  }

  @Post()
  createTodo(@Body() todo: TodoDto): Todo {
    return this.appService.createTask({ ...todo, done: false });
  }
}
