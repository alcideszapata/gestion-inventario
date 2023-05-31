import {gql} from "graphql-tag";

const GET_ENTRADAS = gql`
    query Entradas {
          entradas {
            id
            fkMaterial
            fechaMovimiento
            cantidad
          }
    }
`;

export { GET_ENTRADAS }
