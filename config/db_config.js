const { isPrd } = require('./env_config');

module.exports = {
    MYSQL_CONF: {
        base: {
            host: isPrd? 'localhost' : '47.92.198.10',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000, //超时时间
            },
        },
        //通过环境变量分别管理线上和生产环境的数据库配置密码
        // conf: ['txclass', 'txclass', isPrd ? 'axy123114' : '12345678']  //TODO:修改密码
        conf: ['blog', 'wujiahao', isPrd ? '123456' : '123456'], //TODO:修改密码
        // conf: ['txclass', 'root', isPrd ? 'WjH*zplzo4rq' : '12345678']  //TODO:修改密码
    },
    // REDIS_CONF: isPrd ? ['6379', '127.0.0.1'] : ['3306', '47.92.198.10'],
};
