const controller = require("../controllers/category.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/category/getAll", controller.getCategories);
  app.post("/api/category/createCategory", controller.createCategory)
  app.post("/api/category/removeCategory", controller.removeCategory)
  app.post("/api/category/getCurrentCategory", controller.getCurrentCategory);
  app.post("/api/category/changeCategory", controller.changeCategory);
};
