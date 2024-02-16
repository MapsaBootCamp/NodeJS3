import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  done?: boolean;

  @Prop({ default: () => new Date(+new Date() + 2 * 24 * 60 * 60 * 1000) })
  dueDate?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
