import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './app.interface';
import { TodoDto } from './todo.dto';

@Controller()
export class AppController {
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
