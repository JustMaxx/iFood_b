module.exports = (sequelize,Sequelize)=>{
const Goods = sequelize.define(
  "goods",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    available:{
      type: Sequelize.BOOLEAN,
      allowNull:true,
      defaultValue:false,
    }
  },
  {
    timestamps: false,
  }
);
  return Goods;
}
