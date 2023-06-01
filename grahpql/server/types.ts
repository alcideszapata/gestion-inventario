import {gql} from "graphql-tag";

const typeDefs = gql`
  scalar DateTime
  
  type Materiales {
      id:            ID!
      nombre:        String!
      fechaCreacion: DateTime!
      saldo:         String!
  }
  
  type Role {
    id:     ID
    name:   String
    users:  [Usuarios]
  }
  
  type Usuarios {
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
  
  type Entradas {
      id:                ID!
      material:          Materiales!
      fechaMovimiento:   DateTime!
      cantidad:          Int!
  }
  
  type Inventarios {
      id:                 ID!
      fkUsuario:          String!
      fkEntradas:         String!
      fkSalidas:          String!
  }
  
  type Role {
    id: ID
    name: String
    users: [Usuarios]
  }
  
  type Usuarios {
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
    materiales:         [Materiales]
    usuarios:           [Usuarios]
    entradas:           [Entradas]
    inventarios:        [Inventarios]
    material(id: Int!): Materiales
  }
  
  type Mutation {
    createMaterial(nombre: String!, fechaCreacion: String!, saldo: String): Materiales
    createEntrada(material: Int!, fechaMovimiento: String!, cantidad: String): Entradas
  }
`;

export {typeDefs};
