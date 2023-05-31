import {gql} from "graphql-tag";

const GET_USUARIOS = gql`
    query Usuarios {
          usuarios {
            id
            fkUsuario
            fkEntradas
          }
    }
`;

export { GET_USUARIOS }
