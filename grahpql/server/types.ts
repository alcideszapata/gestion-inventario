import {gql} from "graphql-tag";

const typeDefs = gql`
  scalar DateTime
  
  type materiales {
      id: ID!
      nombre: String!
      fechaCreacion: DateTime!
      saldo: String!
  }
    
  type Query {
    materiales: [materiales]
    material(id: Int!): materiales
  }
  
  type Mutation {
    createMaterial(nombre: String!, fechaCreacion: String!, saldo: String): materiales
  }
`;

export {typeDefs};
