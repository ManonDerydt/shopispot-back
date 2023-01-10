const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
}

exports.comparePassword = (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
}