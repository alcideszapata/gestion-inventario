import {gql} from "graphql-tag";

const GET_USERS = gql`
  query Users {
    users {
      name
      email
    }
  }
`;

const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      email
      name
      role {
        name
      }
    }
  }
`;

export { GET_USER, GET_USERS }
