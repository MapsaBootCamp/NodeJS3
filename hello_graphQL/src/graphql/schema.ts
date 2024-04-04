import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AuthorDetailQuery, AuthorsQuery } from "./queries";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "hame Query ha",
  fields: {
    authorsList: AuthorsQuery,
    authorDetail: AuthorDetailQuery,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

export default schema;
