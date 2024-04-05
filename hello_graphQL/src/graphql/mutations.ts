import { GraphQLString } from "graphql";
import { AuthorType } from "./types";
import { Authors } from "../../db";

export const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: GraphQLString },
  },
  resolve: (_: any, args: any) => {
    try {
      const newAuthor = {
        id: Authors.length + 1,
        name: args.name,
        description: "",
      };
      Authors.push(newAuthor);
      return newAuthor;
    } catch (error) {
      return new Error("YEK KHATA");
    }
  },
};
