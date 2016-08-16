var Sequelize = require('sequelize');
var db = require('./_db');

var activitySchema = {};
var activityOptions = {};


activitySchema.name = {

	type: Sequelize.STRING,
	allowNull: false
};

activitySchema.age_range = {

	type: Sequelize.STRING,
	allowNull: false
}

var Activity = db.define('activity', activitySchema, activityOptions);

module.exports = Activity;