const typeDefs = `#graphql

  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String
    updatedAt: String
  }

  type AuthResponse {
    token: String!
    user: User!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
    ): AuthResponse!

     login(
      email: String!
      password: String!
    ): AuthResponse!
  }

`;

module.exports = typeDefs;