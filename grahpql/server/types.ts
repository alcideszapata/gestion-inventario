import {gql} from "graphql-tag";

const typeDefs = gql`
  scalar DateTime
  
  type Materiales {
      id: ID!
      nombre: String!
      fechaCreacion: DateTime!
      saldo: String!
  }
    
  type Query {
    materiales: [Materiales]
    material(id: Int!): Materiales
  }
  
  type Mutation {
    createMaterial(nombre: String!, fechaCreacion: String!, saldo: String): Materiales
  }
`;

export {typeDefs};
