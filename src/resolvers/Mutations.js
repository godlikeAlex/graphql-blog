import hashPassword from '../utils/hashPassword';
import generateToken from '../utils/generateToken';
import bcrypt from 'bcryptjs';

const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        const password = await hashPassword(data.password);
        const user = await prisma.mutation.createUser({
            data: {
                ...data,
                password
            }
        },info);

        return {
            token: generateToken(user.id),
            user
        }
    },
    async login(parent, {data}, { prisma }, info) {
        const user = await prisma.query.user({
            where: {
                email: data.email
            }
        });

        if(!user) {
            throw new Error('Required user not found!')
        }

        const isMatch = await bcrypt.compare(data.password, user.password);

        if(!isMatch) {
            throw new Error('Invalid password!')
        }

        return {
            token: generateToken(user.id),
            user
        }
    },
    async updateUser(parent, { id, data }, { prisma }, info) {
        const exists = await prisma.exists.User({
            id
        });

        if(typeof data.password === 'string') {
            data.password = await hashPassword(data.password);
        }

        if(!exists) {
            throw new Error('Required user not found')
        }

        return await prisma.mutation.updateUser({
            where: {
                id
            },
            data
        }, info);
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