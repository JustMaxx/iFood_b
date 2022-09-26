module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "categories",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      pathPht:{
        type: Sequelize.STRING,
      },
      href:{
        type: Sequelize.STRING,
      },
      available:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      timestamps: false,
    }
  );

  return Category;
};
