"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = require("@graphql-tools/schema");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var http_1 = require("http");
var PubSub = require('apollo-server-express').PubSub;
var pubsub = new PubSub();
var app = express_1.default();
var schema = schema_1.makeExecutableSchema({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
var apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schema,
    context: function (_a) {
        var req = _a.req, res = _a.res;
        return ({ req: req, res: res, pubsub: pubsub });
    },
});
apolloServer.applyMiddleware({ app: app, cors: false });
var httpServer = http_1.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 8000 }, function () {
    console.log("Serwer GraphQL został uruchomiony!" + apolloServer.graphqlPath);
});
