import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TodoModule,
    AModule,
    BModule,
    MongooseModule.forRoot('mongodb://localhost:27017/todoNest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
