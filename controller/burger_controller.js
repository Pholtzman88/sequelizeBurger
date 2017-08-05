//require dependencies
var express = require("express");
var router = express.Router();
var Burger = require("../model/burger.js");

//set landing page to show all burgers
router.get("/",function(req,res){
	res.redirect("/burgers")
});

//landing page - inserts all burgers into handlebars
router.get("/burgers",function(req,res){
	Burger.sync();
	Burger.findAll({
	}).then(function(data){
		res.render("index", {burgers: data});
	});
});

//handles creating new burger in db and then redirects to burgers page
router.post("/burgers/create", function(req,res){
	Burger.sync();
	Burger.create({
		burger_name: req.body.name,
		devoured: false
	}).then(function(data){
		res.redirect("/burgers");
	});
});
//handles updating devoured boolean in mysql then redirects to burgers page
router.put("/burgers/update/:id",function(req,res){
	Burger.sync();
	Burger.update({
		devoured: true
	},{
		where: {
			id: req.params.id
		}
	}).then(function(data){
		res.redirect("/burgers");
	})
});
//export router
module.exports = router;


