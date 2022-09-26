const controller = require("../controllers/goods.controller");
const { uploadImg } = require("../middleware/")
module.exports = function (app) {
  
  app.post("/api/goods/getGoods", controller.getGoods);
  app.get("/api/goods/getAll", controller.getAll);
  app.post("/api/goods/addProduct", controller.addProduct);
  app.post("/api/goods/updateImg",uploadImg.single('image'), controller.updateImg);
  app.post("/api/goods/deleteProduct",controller.deleteProduct);
  app.post("/api/goods/changeAvl", controller.changeAvl)
  app.post("/api/goods/getTopProducts", controller.getTopProducts)
}
