const bcrypt = require('bcryptjs');

function hashPassword(pass) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  return hash
}

function checkPassword(input, hash) {
  return bcrypt.compareSync(input, hash);
}

module.exports = {hashPassword,checkPassword}