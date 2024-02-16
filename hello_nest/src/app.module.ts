import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodoModule,
    AModule,
    BModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todoNest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
