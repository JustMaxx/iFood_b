module.exports = (sequelize,Sequelize)=>{
  const Orders = sequelize.define(
    "Orders",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,        
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      typePayment:{
        type: Sequelize.INTEGER
      },
      currentAdress:{
        type: Sequelize.STRING,
      },
      total:{
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
    }
    
  );

  return Orders;
}