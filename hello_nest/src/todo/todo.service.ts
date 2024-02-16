import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { UpdateTodoDto } from './dtos/updateTodo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  getAllTask(): Promise<Todo[]> {
    return this.todoModel.find({});
  }

  createTask(todo: Todo): Promise<Todo> {
    return this.todoModel.create(todo);
  }

  deleteTask(id: string) {
    return this.todoModel.deleteOne({ _id: id });
  }

  updateTodo(id: string, todo: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }
}
