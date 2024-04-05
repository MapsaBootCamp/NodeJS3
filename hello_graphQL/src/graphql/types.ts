import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Authors } from "../../db";

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
