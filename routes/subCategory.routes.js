const controller = require("../controllers/subCategory.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/subCategory/getAllSubCategory", controller.getAllSubCategory)
  app.post("/api/subCategory/createSubCategory", controller.createSubCategory)
  app.post("/api/subCategory/getAll", controller.getAll)
  app.post("/api/subCategory/removeSubCat", controller.removeSubCat)
};
