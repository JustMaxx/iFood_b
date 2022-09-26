module.exports = (sequelize,Sequelize)=>{
  const OrderProducts = sequelize.define(
    "OrderProducts",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,        
      },
      productId: {
        type: Sequelize.INTEGER,
      },
      count:{
        type: Sequelize.INTEGER,
      },
      orderId:{
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
    
  );

  return OrderProducts;
}