const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mount = require('koa-mount');

const { join, extname } = require('path')

//引入redis相关依赖
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

//设置跨域限制
const cors = require('koa2-cors')

const indexRouter = require('./routes/index')

const { sessionInfo, cookieInfo, corsOrigin } = require('./config/config')
// const { redisGet, redisSet } = require('./libs/redisClient');
// error handler
onerror(app)

//设置跨域
app.use(
  cors({
    origin: function (ctx) {
      // return 'http://localhost:3001';
      return corsOrigin
    },
    credentials: true //后端允许设置cookie
  })
)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    // extension: 'pug'
    extension: 'ejs' //安装ejs后改用这个
  })
)

let render
app.use(async (ctx, next) => {
  // console.log('ctx--------', ctx)
  /**
   *  扩展global对象
   *
   *  这里是在服务端处理好cookie，
   *  会把所有cookie处理成{}形式
   *  赋值到global上面，方便客户端使用
   *
   *  同时获取浏览器的默认语言，处理好
   */
  // global._cookies = parseCookie(ctx);
  // global._navigatorLang = parseNavLang(ctx);

  const ext = extname(ctx.request.path)
  console.log('ctx.request.url', ctx.request.url)
  console.log('ext111', ext)
  // await next()
  // return
  // 符合要求的路由才进行服务端渲染，否则走静态文件逻辑
  if (!ext) {
    if (!render) {
      render = require('./dist/umi.server')
    }
    // 这里默认是字符串渲染
    ctx.type = 'text/html'
    ctx.status = 200
    const { html, error } = await render({
      path: ctx.request.url
    })
    if (error) {
      console.log('----------------服务端报错-------------------', error)
      ctx.throw(500, error)
    }
    ctx.body = html
  } else {
    await next()
  }
})
const root = join(__dirname, 'dist');

/**
 *  注意这里的静态目录设置，需要和umi打包出来的目录是同一个
 *  这里最好是用nginx配置静态目录，如果是用cdn方式部署，这里可以忽略
 *
 */
app.use(mount('/dist', require('koa-static')(root)));
app.keys = sessionInfo.keys //加密cookie的key

//使用session中间件
app.use(
  session({
    key: sessionInfo.name, // cookie name
    prefix: sessionInfo.prefix, //redis key前缀
    cookie: cookieInfo
    // store: redisStore(redisInfo)
  })
)

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
})

// Express  umi ssr
// app.use(async (req, res) => {
//   const render = require("./dist/umi.server");
//   res.setHeader("Content-Type", "text/html");

//   const context = {};
//   const { html, error, rootContainer } = await render({
//     // 有需要可带上query
//     path: req.url,
//     context,
//     // 可自定义 html 模板
//     // htmlTemplate: defaultHtml,

//     // 启用流式渲染
//     // mode: 'stream',

//     // HTML 片段静态标记（适用于静态站点生成）
//     // staticMarkup: false,

//     // 扩展 getInitialProps 在服务端渲染中的参数
//     // getInitialPropsCtx: {},

//     // manifest，正常情况下不需要
//   });

//   // support stream content
//   if (content instanceof Stream) {
//     html.pice(res);
//     html.on("end", function () {
//       res.end();
//     });
//   } else {
//     res.send(res);
//   }
// });

module.exports = app
