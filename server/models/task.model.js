const mongoose = require('mongoose');
const helpers = require('../controllers/helpers.js');

var task = mongoose.Schema({
	owner : { type: mongoose.Schema.Types.ObjectId, required: true },
	task : { type: String, default: '', required: true },
	options : { type: Array, default: [], required: false },
	location : { type: Array, default: '', required: false },
	date : { type: Date, default: Date.now, required: true },
})

module.exports = mongoose.model('Task', task);



function preSaveFunc( object ){
	// object.sign = 0;
	// let typeSafe = false;

	// if( object.type.indexOf('--') >= 0 ){
	// 	object.sign = -1;
	// 	typeSafe = true;
	// } 
	// if( object.type.indexOf('++') >= 0 ){
	// 	object.sign = 1;
	// 	typeSafe = true;
	// } 

	// // problem with type so overriding..
	// if(!typeSafe){
	// 	object.sign = -1;
	// 	object.type = '--';
	// }

	// object.amount = Math.abs(object.amount);

	// if(object.amount > 100000){
	// 	object.amount = 999999.99;
	// }
	
	return object;
}
exports.preSaveFunc = preSaveFunc;

task.pre('save', function (next) {
	preSaveFunc(this);
	next();
});
task.pre('update', function (next) {
	preSaveFunc(this);	
	next();
});