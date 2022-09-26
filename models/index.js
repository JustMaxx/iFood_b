const config = require("../db/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.category = require("../models/category.model.js")(sequelize, Sequelize);
db.subCategories = require("../models/subCategories.model.js")(sequelize, Sequelize);
db.goods = require("../models/goods.model.js")(sequelize, Sequelize);
db.orderProducts = require("../models/orderProducts.model.js")(sequelize, Sequelize);
db.orders = require("../models/orders.model.js")(sequelize, Sequelize);




db.category.hasMany(db.subCategories);
db.category.hasMany(db.goods);
db.goods.belongsTo(db.category, {as: 'category'});
db.goods.belongsTo(db.subCategories, {as: 'subCategory', foreignKey: 'subCategoryId'});
db.orderProducts.belongsTo(db.goods, {as: 'orderProducts', foreignKey: 'productId'});
db.orderProducts.belongsTo(db.orders, {as: 'orderProducts2', foreignKey: 'orderId'});
db.orders.belongsTo(db.user, {as: 'orders', foreignKey: 'userId'});
db.subCategories.belongsTo(db.category, {as: 'category', foreignKey: 'categoryId'});
db.subCategories.hasMany(db.goods);

module.exports = db;
