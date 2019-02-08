import jwt from 'jsonwebtoken';

const getUserId = (req) => {
    const header = req.request ? req.request.headers.authorization : request.connection.context.Authorization;

    if(header) {
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded.userId
    }

    return null;
};

export default getUserId;