import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

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
