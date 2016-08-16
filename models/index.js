var db = require('./_db'),
	Place = require('./place'),
	Hotel = require('./hotel'),
	Activity = require('./activity'),
	Restaurant = require('./restaurant');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;


