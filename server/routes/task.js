const user = require('../controllers/user.js');
const helpers = require('../controllers/helpers.js');

const task = require('../controllers/task.js');
// const taskImport = require('../controllers/task_import.js');
// const taskHeader = require('../controllers/task_header.js');

const token = require('../controllers/token.js');
const path = require('path');
const status = require('../config/status_response.js');
const config = require('../config/config.js');
var logger = require( '../log/log.js' );




// task paths 
module.exports = function( App ) {

	App.post('/api/task/create', token.check, function(request, response){

		task.create( request.decoded, request.body, function(error, newtask){

			if( error ){
				logger.add( error );
				let eStatus = error.status || status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : error.message || error , 
				});
			}

			if( newtask === null ){
				logger.add( 'error' );
				let eStatus = status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : 'no item created.', 
				});
			}

			return response.status(status.success.created).json({
				status : status.success.created,
				message : 'success new item created.',
				data : {
					items : [ newtask ],
				},		
			});	
		});
	});

	App.put('/api/task/:_id', token.check, function(request, response){
		
		request.body._id = request.params._id;

		task.update( request.decoded, request.body, function(error, newtask){

			if( error ){
				logger.add( error );
				let eStatus = error.status || status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : error.message || error, 
				});
			}

			if( newtask === null ){
				logger.add( 'error' );
				let eStatus = status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : 'no item updated.', 
				});
			}

			return response.status(status.success.ok).json({
				status : status.success.ok,
				message : 'success item updated.',
				data : {
					items : [task.safeData( newtask )],
				},			
			});	
		});
	});

	App.delete('/api/task/:_id', token.check, function(request, response){
		
		request.body._id = request.params._id;

		task.remove( request.decoded, request.body, function(error, newtask){

			if( error ){
				logger.add( error );
				let eStatus = error.status || status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : error.message || error, 
				});
			}
			
			if( newtask === null ){
				logger.add( 'error' );
				let eStatus = status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : 'no item found.', 
				});
			}			

			return response.status(status.success.ok).json({
				status : status.success.ok,
				message : 'success item deleted.',
				data : {
					items : [task.safeData( newtask )],
				},
			});	
		});
	});

	App.post('/api/task/:_date_start/:_date_end', token.check, function(request, response){

		task.getRange( request.decoded, request.params._date_start, request.params._date_end, function( error, result){
		
			if( error ){
				logger.add( error );
				let eStatus = error.status || status.server.bad;
				return response.status(eStatus).json({ 
					status : eStatus, 
					message : error.message || error, 
				});
			}

			return response.status(status.success.accepted).json({
				status : status.success.accepted,
				message : 'success items.',
				data : result,
			});

		});	
	});

	

}


