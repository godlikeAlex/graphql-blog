import hashPassword from '../utils/hashPassword';

const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        const password = await hashPassword(data.password);
        const user = await prisma.mutation.createUser({
            data: {
                ...data,
                password
            }
        });

        return user
    },
    updateUser(parent, { data }, { prisma }, info) {
        return "Comming Soon!"
    },
    deleteUser(parent, { data }, { prisma }, info) {
        return "Comming Soon!"
    }
};

export default Mutation;