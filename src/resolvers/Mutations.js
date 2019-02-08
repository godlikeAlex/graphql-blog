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
    async updateUser(parent, { id, data }, { prisma }, info) {
        const exists = await prisma.exists.User({
            id
        });

        if(!exists) {
            throw new Error('Required user not found')
        }

        return await prisma.mutation.updateUser({
            where: {
                id
            },
            data
        })
    },
    async deleteUser(parent, { id }, { prisma }, info) {
        const exists = await prisma.exists.User({
            id
        });

        if(!exists) {
            throw new Error('Required user not found!')
        }

        return await prisma.mutation.deleteUser({
            where: {
                id
            }
        })
    }
};

export default Mutation;