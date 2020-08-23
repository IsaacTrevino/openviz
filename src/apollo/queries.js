import { gql } from '@apollo/client';

export const IS_DARK_MODE = gql`
query darkMode {
  darkMode @client
}
`;

export const GET_USER = gql`
  query user {
    user @client
  }
`;