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
    }
}

export default resolvers;