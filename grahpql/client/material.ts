import {gql} from "graphql-tag";

const GET_MATERIALES = gql`
    query Materiales {
          materiales {
            id
            nombre
            fechaCreacion
            saldo
          }
    }
`;

const CREATE_MATERIALES = gql `
    mutation CreateMaterial($nombre: String!, $fechaCreacion: String!, $saldo: String) {
      createMaterial(nombre: $nombre, fechaCreacion: $fechaCreacion, saldo: $saldo) {
        nombre,
        fechaCreacion,
        saldo
      }
    }
`

export { GET_MATERIALES, CREATE_MATERIALES }
