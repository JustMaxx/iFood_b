const db = require("../models");
const Order = db.orders
const orderProducts = db.orderProducts

exports.addNewOrder = (req,res)=>{
  Order.create({
    userId: req.body.id,
    typePayment: req.body.paymentType,
    currentAdress: req.body.adress,
    total: req.body.total
  })
  .then(data=>{
    req.body.products.forEach((el)=>{
      orderProducts.create({
        productId:el.id,
        count: el.count,
        orderId: data.id
      })
    })
  })
  .then(()=>res.status(200).send())
}

exports.getOrders = (req,res)=>{
  let Orders;
  let OrderProducts;
  Order.findAll({where:{
    userId:req.body.id
  },
  order: [
    ['id', 'DESC'],
  ],
  })
  .then(data=>{
    Orders = data
    db.sequelize.query(
      'SELECT DISTINCT "Orders".id, "OrderProducts".id as OrderId, title, price, count FROM goods, "OrderProducts", "Orders" WHERE goods.id = "OrderProducts"."productId" AND "OrderProducts"."orderId" = "Orders".id AND "OrderProducts"."orderId" = ANY (SELECT "Orders"."id" FROM "OrderProducts", "Orders" WHERE "Orders"."userId" = 1) ORDER BY "Orders".id',
      { type: db.sequelize.QueryTypes.SELECT}
    )
    .then((data)=>{
      OrderProducts = data
      res.status(200).send({Orders,OrderProducts})
    })
    // let array = async()=>{return await data.map((item,i,arr)=>{
    //   orderProducts.findAll({where:{
    //     orderId:item.id
    //   }})
    //   .then(result=>{
    //     item.orderProducts = result
    //     return item
    //   })
    // })}
    // array()
    // .then((res)=>{console.log(res)})
  })
  // .then(data=>res.status(200).send(data))
}