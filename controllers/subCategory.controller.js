const db = require("../models");
const SubCategories = db.subCategories;
const Category = db.category;
exports.getAllSubCategory = (req,res)=>{
  SubCategories.findAll({
    include:[{
      attributes: [],
      model:Category,
      as: 'category', 
      where:{
        href:req.body.params.href,
      } 
    }]
  })
  .then((result)=>res.status(200).send(result))
}

exports.getAll = (req,res)=>{
  SubCategories.findAll()
  .then((data)=>res.status(200).send(data))
}
exports.removeSubCat = (req,res)=>{
  SubCategories.destroy({where:{
    id:req.body.id
  }})
  .then(()=>res.status(200).send())
}
exports.createSubCategory = (req,res)=>{
  SubCategories.create({
    title:req.body.title,
    categoryId:req.body.id
  })
  .then(()=>res.status(200).send())
}