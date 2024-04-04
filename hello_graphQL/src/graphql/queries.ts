import { GraphQLInt, GraphQLList } from "graphql";
import { AuthorType, AuthorsType } from "./types";
import { Authors } from "../../db";

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
    id: { type: GraphQLInt },
  },
  resolve: (_: any, args: any) => {
    try {
      return Authors.find((author) => author.id === args.id);
    } catch (error) {}
  },
};
