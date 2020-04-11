import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string {
            return "Hola Mundo";
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola ${nombre}`;
        },
        holaCursoGraphQL(): string {
            return "Hola Curso GraphQL";
        }
    }
};

export default query;