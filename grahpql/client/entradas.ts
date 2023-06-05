import {gql} from "graphql-tag";

const CREATE_ENTRADAS = gql `
    mutation CreateEntrada($material: Int!, $fechaMovimiento: String!, $cantidad: Int) {
      createEntrada(material: $material, fechaMovimiento: $fechaMovimiento, cantidad: $cantidad) {
        id
        fechaMovimiento
        cantidad
      }
    }
`;

export { CREATE_ENTRADAS }
