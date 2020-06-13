const seq = require('./connections/mysql_connect');

seq.authenticate().then(() => {
	console.log('MySQL server is connected completely.');
}).catch ((error) => {
	console.log('MySQL server is failed to be connected. Error information is below: ' + error);
});


// 表同步
seq.sync({
	//force: true      注释后，不会覆盖其他的表
}).then(() => {  
	console.log('The table has been synchronised into database successfully');
	process.exit();
});