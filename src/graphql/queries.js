import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($productId: ID!) {
    product(id: $productId) {
      name
      price
      isInCart @client
    }
  }
`;