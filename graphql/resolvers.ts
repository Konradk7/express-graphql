import { IResolvers} from "@graphql-tools/utils";
import { v4 } from "uuid";
import {GqlContext} from "./GqlContext";
import { todos } from "./db";


interface User {
    id: string;
    username: string;
    description?: string
}

interface Todo {
    id: string;
    title: string;
    description?: string;
}
const resolvers: IResolvers = {
    Query: {
        getUser: async (
            obj: any,
            args: {
                id: string;
            },
            ctx: GqlContext,
            info: any
        ): Promise<User> => {
            return {
                id: v4(),
                username: "Dawid",
            };
        },
        getTodos: async (
            parent: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<Array<Todo>> => {
            return  [
                {
                    id: v4(),
                    title: "Zadanie pierwsze",
                    description: "Opis pierwszego zadania",
                },
                {
                    id: v4(),
                    title: "Zadanie drugie",
                    description: "Opis drugiego zadania",
                },
                {
                    id: v4(),
                    title: "Zadanie trzecie",
                },
            ];
        },
    },
    Mutation: {
        addTodo: async (
            parent: any,
            args: {
                title: string;
                description: string;
            },
            ctx: GqlContext,
            info: any
        ): Promise<Todo> => {
            todos.push({
                id: v4(),
                title: args.title,
                description: args.description
            });
            return todos[todos.length -1];
        },
    },
};

export default resolvers;