const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define the resolver for the schema
const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});