const seq = require('./connections/mysql_connect');

seq.authenticate().then(() => {
	console.log('MySQL server is connected completely.');
}).catch ((error) => {
	console.log('MySQL server is failed to be connected. Error information is below: ' + error);
});

seq.sync({
	//force: true
}).then(() => {
	console.log('The table has been synchronised into database successfully');
	process.exit();
});