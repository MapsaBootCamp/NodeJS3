import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AuthorDetailQuery, AuthorsQuery, BooksListQuery } from "./queries";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "hame Query ha",
  fields: {
    authorsList: AuthorsQuery,
    authorDetail: AuthorDetailQuery,
    booksList: BooksListQuery,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

export default schema;
