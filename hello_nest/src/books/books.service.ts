import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { CreateAuthorInput } from './dto/create-author';

const Authors = [
  {
    id: '1',
    name: 'Ali',
    description: 'ehgiekhg',
  },
  {
    id: '2',
    name: 'Reza',
    description: 'eeojoejg',
  },
];

const Books = [
  {
    id: '1',
    name: 'AliBook',
    authorId: '1',
  },
  {
    id: '2',
    name: 'RezaBook',
    authorId: '2',
  },
];

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    const newBook = { id: `${Math.random()}`, ...createBookInput };
    Books.push(newBook);
    return newBook;
  }

  findAll() {
    return Books;
  }

  findOne(id: string) {
    return Books.find((book) => book.id === id);
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}

@Injectable()
export class AuthorsService {
  create(createAuthorInput: CreateAuthorInput) {
    const newAuthor = { id: `${Math.random()}`, ...createAuthorInput };
    Authors.push(newAuthor);
    return newAuthor;
  }
  findAll() {
    return Authors;
  }
}
