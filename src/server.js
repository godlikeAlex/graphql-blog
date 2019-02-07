import "@babel/polyfill/noConflict";
import { GraphQLServer } from 'graphql-yoga';
import prisma from './prisma';
import resolvers from './resolvers/index';

const server = new GraphQLServer({
     typeDefs: './src/schema.graphql',
     resolvers,
     context(request) {
        return{ 
            prisma,
            request
        }
     }
});

server.start( process.env.PORT || 4000 , () => {
    console.log("✔ Server running");
});