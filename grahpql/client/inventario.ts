import {gql} from "graphql-tag";

const GET_INVENTARIOS = gql`
    query Inventarios {
          inventario {
            id
            fkUsuario
            fkEntradas
            fkSalidas
          }
    }
`;

export { GET_INVENTARIOS }
