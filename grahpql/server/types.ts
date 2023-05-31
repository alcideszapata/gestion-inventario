import {gql} from "graphql-tag";

const typeDefs = gql`
  scalar DateTime
  
  type Materiales {
      id: ID!
      nombre: String!
      fechaCreacion: DateTime!
      saldo: String!
  }
  
  type Role {
    id: ID
    name: String
    users: [Usuarios]
  }
  
  type User {
      id: ID!
      roleId:         String!
      name:           String!
      nombre2:        String!
      apellido1:      String!
      apellido2:      String!
      identificacion: String!
      telefono:       String!
      email:          String!
      emailVerified:  DateTime!
      createdAt:      DateTime!
      updatedAt:      DateTime!
  }
    
  type Query {
    materiales: [Materiales]
    usuarios: [Usuarios]
    material(id: Int!): Materiales
  }
  
  type Mutation {
    createMaterial(nombre: String!, fechaCreacion: String!, saldo: String): Materiales
  }
`;

export {typeDefs};
