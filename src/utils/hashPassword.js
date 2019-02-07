import bcrypt from 'bcryptjs';

const hashPassword = (password) => {
    if(password.length < 7) {
        throw new Error('Passord must be 7 characters or longer.')
    }

    return bcrypt.hash(password, 10);
};

export default hashPassword;