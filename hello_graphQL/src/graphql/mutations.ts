import { GraphQLID, GraphQLString } from "graphql";
import { AuthorType, AuthorUpdateType } from "./types";
import { Authors } from "../../db";
import { generateId } from "../utils";

export const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: GraphQLString },
  },
  resolve: (_: any, args: any) => {
    try {
      const newAuthor = {
        id: generateId(),
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

export const editAuthor = {
  type: AuthorType,
  args: {
    id: { type: GraphQLID },
    inputData: { type: AuthorUpdateType },
  },
  resolve: (_: any, args: any) => {
    try {
      const authorIndex = Authors.findIndex((author) => author.id === args.id);
      const newAuthor = {
        ...Authors[authorIndex],
        ...args.inputData,
      };
      Authors.splice(authorIndex, 1, newAuthor);
      return newAuthor;
    } catch (error) {
      return new Error("YEK KHATA");
    }
  },
};
// export const addBook
// export const editBook
// export const deleteAuthor
// export const deleteBook
