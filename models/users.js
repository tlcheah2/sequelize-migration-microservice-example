module.exports = (sequelize, type) => sequelize.define('users', {
  name: { type: type.STRING },
  email: { type: type.STRING },
  password: { type: type.STRING },
  isPaidMember: { type: type.BOOLEAN },
});