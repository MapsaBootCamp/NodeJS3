import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AuthorDetailQuery, AuthorsQuery, BooksListQuery } from "./queries";
import { addAuthor, editAuthor } from "./mutations";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "hame Query ha",
  fields: {
    authorsList: AuthorsQuery,
    authorDetail: AuthorDetailQuery,
    booksList: BooksListQuery,
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  description: "",
  fields: {
    addAuthor: addAuthor,
    editAuthor,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
