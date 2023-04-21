const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    reviews: [Review]
  }

  type Review {
    _id: ID
    reviewBody: String
    userId: ID
  }

  type User {
    _id: ID
    name: String
    email: String
    admin: Boolean
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      admin: Boolean
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
    addProduct(products: [ID]!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    addReview(reviewBody: String, userId: ID!): Product
  }
`;

module.exports = typeDefs;
