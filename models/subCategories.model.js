module.exports = (sequelize, Sequelize) => {
  const Subategories = sequelize.define(
    "subCategories",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Subategories;
};
