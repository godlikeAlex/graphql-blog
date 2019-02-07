import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/blog',
    secret: "pi23jasxlgmfd65e0984ase23we"
});

export default prisma;