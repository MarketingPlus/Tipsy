// const { User } = require("../models");
const { response } = require("express");
const db = require("../models");

module.exports = {
  addFavorite: function (req,res){
    // const user = new User(req.body)
    console.log("adding favorite");
    console.dir(req.body);
    console.log(req.params.id);
    db.User
    .findOneAndUpdate({_id:req.params.id},{$push:{favorites:req.body.title}}, {new: true})
    .then(response =>{
      res.json(response.favorites)
    })
    .catch(err =>{
      res.json(err);
    })
    
    // console.log(req.body);
    // db.User
    // .create(req.body)
    // // .insertOne(req.body)
    // .then(result => res.json(result))
    // .catch(error => console.log(error));
  }
}