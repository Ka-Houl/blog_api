const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//引入redis相关依赖
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

//设置跨域限制
const cors = require('koa2-cors');

const indexRouter = require('./routes/index');

const { sessionInfo, cookieInfo, redisInfo, corsOrigin } = require('./config/config');
// const { redisGet, redisSet } = require('./libs/redisClient');
// error handler
onerror(app)


//设置跨域
app.use(cors({
  origin: function (ctx) {
    // return 'http://localhost:3001';
    return corsOrigin;
  },
  credentials: true   //后端允许设置cookie
}));

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'pug'
  extension: 'ejs'   //安装ejs后改用这个
}))

app.keys = sessionInfo.keys;   //加密cookie的key


//使用session中间件
app.use(session({
  key: sessionInfo.name, // cookie name
  prefix: sessionInfo.prefix,  //redis key前缀
  cookie: cookieInfo,  
  store: redisStore(redisInfo)
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes   //注册路由
app.use(indexRouter.routes(), indexRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
