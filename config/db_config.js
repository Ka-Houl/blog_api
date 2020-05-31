const { isPrd } = require('./env_config');

module.exports = {
	MYSQL_CONF: {
		base: {
			host: 'localhost',
			dialect: 'mysql',
			pool: {
				max: 5,
				min: 0,
				idle: 10000  //超时时间
			}
		},
		conf: ['txclass', 'root', isPrd ? 'axy123114' : '12345678']
	},
	REDIS_CONF: ['6379', '127.0.0.1']
};