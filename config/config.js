const { REDIS_CONF } = require('./db_config'),
      { isPrd } = require('./env_config');

module.exports = {
	qiniu: {
		keys: {
			// ak: 'gCyds_nz_v-QhVIDt6LtIIjo1jVoxJnXkoCFDUrt',
			ak: '30RtC2yzfh2CmfZwMqRT1oKSnysh5ENcAFdmWl3n',
		  // sk: 'm7bfJT6AbUU9jbTiYJFcpiLx4H4wcmQccFzVIz2r'
		  sk: 'aH4rf5TFJdYmIITOkf9EhLo0oDcp4a-cVHdtUa7w'
		},
    bucket: {
    	tximg: {
    		// bucket_name: 'txclass-image',
    		bucket_name: 'kahoul-blog-img',
				// domain: 'http://tximg.jsplusplus.com/'
				domain:'http://img.kahoul.top/'
    	}
    }
	},
	crawler: {
		url: {
			main: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=0&category=-1',
			course: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=1&category=-1',
			teacher: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=2&category=-1',
		  aboutus: 'https://msiwei.ke.qq.com/?tuin=304a784b#category=-1&tab=3'
		}
	},
	sessionInfo: {
    keys: ['a1!s2@d3#f4_&g5h6'],
    name: 'txclass.sid',
    prefix: 'txclass.sess'  //session前缀
	},
	cookieInfo: {
		path: '/',   //cookie作用到全局
		httpOnly: true,    //不允许修改cookie 
		maxAge: 24 * 60 * 60 * 1000 // cookie 过期时间  ms
	},
	redisInfo: {
		all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`
	},
	cryptoSecret: 'JKl&*9lj2F@#3kflsAfkDfl',
	adminAccount: {
		username: 'admin',
		password: 'admin'
	},
	corsOrigin: isPrd ? 'http://admin.jsplusplus.com' : 'http://localhost:3000',    //浏览器的ip，不是后端ip
}










