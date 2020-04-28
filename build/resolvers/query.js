"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = {
    Query: {
        hola() {
            return "Hola Mundo";
        },
        holaConNombre(__, { nombre }) {
            return `Hola ${nombre}`;
        },
        holaCursoGraphQL() {
            return "Hola Curso GraphQL";
        }
    }
};
exports.default = query;
