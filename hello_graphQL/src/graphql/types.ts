import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Authors, Books } from "../../db";

const BookBasicType = new GraphQLObjectType({
  name: "BookQuery",
  description: "Book Query",
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
  },
});

export const AuthorsType = new GraphQLObjectType({
  name: "AuthorsQuery",
  description: "Authors list Query",
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
  },
});

export const AuthorType = new GraphQLObjectType({
  name: "AuthorQuery",
  description: "Author Query Detail",
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    desctiption: { type: GraphQLString },
    books: {
      type: GraphQLList(BookBasicType),
      resolve: (parent) => {
        return Books.filter((book) => book.authorId === parent.id);
      },
    },
  },
});

export const BooksType = new GraphQLObjectType({
  name: "BooksQuery",
  description: "Books List Query",
  fields: {
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent) => {
        return Authors.find((author) => author.id === parent.id);
      },
    },
  },
});
