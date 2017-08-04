var connection = require("../config/connection.js");
var Sequelize = require("Sequelize");

var Burger = connection.define("burger",{
	burger_name: Sequelize.STRING,
	devoured: Sequelize.BOOLEAN
})

module.exports = Burger;