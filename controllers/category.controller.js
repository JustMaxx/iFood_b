const db = require("../models");
const Category = db.category;

exports.getCategories = (req, res) => {

  Category.findAll()
  .then((categories)=>{
    console.log('2121')
    console.log(categories)
    res.status(200).send(categories)
  })


}
exports.getCurrentCategory = (req,res)=>{
  console.log(req.params.href)
  Category.findOne({where:{href:req.body.params.href, available:true}})
  .then(result=>{
    res.status(200).send(result)
  })
}

exports.createCategory = (req,res)=>{
  Category.create({
    title: req.body.title,
    pathPht: req.body.path,
    href: req.body.href
  })
  .then(()=>res.status(200).send(true))
}
exports.changeCategory = (req,res)=>{
  Category.update(
    {
    available:!req.body.available,
    },
    {
    where:
    {
      id:req.body.id
    }
    }
  )
}
exports.removeCategory = (req,res)=>{
  Category.destroy({
    where:{
      id:req.body.id
    }
  })
  .then(()=>res.status(200).send(true))
}