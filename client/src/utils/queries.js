import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      name
      email
      isAdmin
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      categories {
        _id
        name
      }
      reviews {
        reviewBody
        userId
      }
    }
  }
`;

export const QUERY_PRODUCTS_ByCategoryID = gql`
  query GetProductsByCategoryID($categoryID: ID) {
    products(categoryID: $categoryID) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
        name
      }
      reviews {
        _id
        reviewBody
        userId
      }
    }
  }
`;
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
