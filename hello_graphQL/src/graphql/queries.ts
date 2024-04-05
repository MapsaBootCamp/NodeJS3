import { GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { AuthorType, AuthorsType, BooksType } from "./types";
import { Authors, Books } from "../../db";

export const AuthorsQuery = {
  type: GraphQLList(AuthorsType),
  resolve: () => {
    try {
      return Authors;
    } catch (error) {}
  },
};

export const AuthorDetailQuery = {
  type: AuthorType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_: any, args: any) => {
    try {
      return Authors.find((author) => author.id === args.id);
    } catch (error) {}
  },
};

export const BooksListQuery = {
  type: GraphQLList(BooksType),
  resolve: (_: any, args: any) => {
    try {
      return Books;
    } catch (error) {}
  },
};
