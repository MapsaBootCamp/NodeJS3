import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';
import { TodoDto } from './dtos/todo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';

@Controller()
export class TodoController {
  /// constructor-based injection
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(): Todo[] | any {
    return this.todoService.getAllTask();
  }

  @Post()
  async createTodo(@Body() todo: TodoDto): Promise<Todo> {
    return await this.todoService.createTask(todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todoService.deleteTask(id);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() updateTodo: UpdateTodoDto) {
    return await this.todoService.updateTodo(id, updateTodo);
  }
  @Get('harchi')
  harchi() {
    return 'harchi';
  }
}
