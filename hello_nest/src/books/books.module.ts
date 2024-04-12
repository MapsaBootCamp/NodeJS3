import { Module } from '@nestjs/common';
import { AuthorsService, BooksService } from './books.service';
import { AuthorsResolver, BooksResolver } from './books.resolver';

@Module({
  providers: [BooksResolver, AuthorsResolver, BooksService, AuthorsService],
})
export class BooksModule {}
