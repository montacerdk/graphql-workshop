const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const users = [
  { id: "23", name: "Montacer Dkhilali", age: 26 },
  { id: "33", name: "John Doe", age: 36 },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (_, args) => users.find((user) => user.id === args.id),
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
