
const db = require("../models");
const Goods = db.goods;
const Category = db.category;
const SubCategories = db.subCategories
const topProducts = db.topProducts


exports.getGoods = (req,res)=>{
  let goods;
  let category;
  let subCategories;
  Goods.findAll({
    where:{
      available:true,
    },
    include:[{
     // attributes: ['title'], ограничить поля
      attributes:['title'],
      model:Category,
      as: 'category',
      where:{
        href:req.body.params.href
      }
    },]
  })
  .then(result=>{    
    res.status(200).send(result)
  })
}
exports.getAll = (req,res)=>{
  Goods.findAll({
    order: [
    ['id', 'DESC'],
    ],
    include:[{
      attributes:['title'],
      model:Category,
      as: 'category',      
    },
    {
      attributes:['title'],
      model:SubCategories,
      as:'subCategory'
    }
  ]
  })
  .then(result=>{   
    res.status(200).send(result)
  })
}
exports.addProduct = (req,res)=>{
  let product = req.body.product
  Goods.create(
    {
      title: product.title,
      description: product.description,
      price: product.price,
      path: product.path,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId
    }
  )
  .then(()=>res.status(200).send("Товар добавлен!"))
}

exports.deleteProduct = (req,res)=>{
  console.log(req)
  Goods.destroy({
    where:{
      id:req.body.id
    }
  })
  .then(()=>res.status(200).send("Товар удален"))
}

exports.changeAvl = (req,res)=>{
  console.log(req.body)
  Goods.update({available:req.body.value},{
    where:{
      id: req.body.id
    }
  })
  .then(()=>res.status(200).send('Данные успешно изменены!'))
}

exports.getTopProducts = (req,res)=>{

  
}
exports.updateImg = (req)=>{

}
