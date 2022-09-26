const db = require("../models");
const User = db.user;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.changeInfo = (req,res)=>{
  User.update({adress:req.body.adress},{
    where:{
      id:req.body.id
    }
  })
  .then(()=>res.status(200).send({msg:'Данные сохранены'}))
}

exports.getData = (req,res)=>{
  User.findOne({
    attributes : ['id','name','secondname','phone','adress'],
    where:{
      id:req.body.id
    }
  })
  .then((data)=>res.status(200).send(data))
}