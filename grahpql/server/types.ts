import {gql} from "graphql-tag";

const typeDefs = gql`

  type materiales {
      id: ID!
      nombre: String!
      fecha_creacion: String!
      saldo: String!
  }
    
  type Query {
    materiales: [materiales]
    material(id: Int!): materiales
  }
`;

export {typeDefs};
