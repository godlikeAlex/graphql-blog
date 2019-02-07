const Query = {
    users(parent, args, {prisma}, info) {
        return prisma.query.users({}, info);
    }
};

export default Query;