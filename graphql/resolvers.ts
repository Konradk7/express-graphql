import { IResolvers} from "@graphql-tools/utils";
import { v4 } from "uuid";
import {ExecutionContext} from "graphql/execution/execute";


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
            ctx: ExecutionContext,
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
            ctx: ExecutionContext,
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
};

export default resolvers;