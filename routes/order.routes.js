const controller = require("../controllers/order.controller");

module.exports = function (app) { 
  app.post("/api/order/addNewOrder", controller.addNewOrder)
  app.post("/api/order/getOrders", controller.getOrders)
};
