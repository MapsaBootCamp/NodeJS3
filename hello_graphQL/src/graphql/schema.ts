import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { AuthorsQuery } from "./queries";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "hame Query ha",
  fields: {
    authorsList: AuthorsQuery,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

export default schema;
