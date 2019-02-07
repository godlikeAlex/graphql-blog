const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        const { name, email, password } = data;

        if(password.length < 8) {
            throw new Error('Invalid password');
        }

        return await prisma.mutation.createUser({
            data: {
                name,
                email,
                password
            }
        });
    },
    updateUser(parent, { data }, { prisma }, info) {
        return "Comming Soon!"
    },
    deleteUser(parent, { data }, { prisma }, info) {
        return "Comming Soon!"
    }
};

export default Mutation;