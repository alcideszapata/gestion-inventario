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

export { GET_MATERIALES }
