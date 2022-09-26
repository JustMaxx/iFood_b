module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      secondname: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      adress: {
        type: Sequelize.STRING,
      }
    },
    {
      timestamps: false,
    }
  );

  return User;
};
