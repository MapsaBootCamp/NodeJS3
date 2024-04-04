import { GraphQLList } from "graphql";
import { AuthorsType } from "./types";
import { Authors } from "../../db";

export const AuthorsQuery = {
  type: GraphQLList(AuthorsType),
  resolve: () => {
    try {
      return Authors;
    } catch (error) {}
  },
};
