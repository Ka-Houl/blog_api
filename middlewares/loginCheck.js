const { returnInfo } = require('../libs/utils'),
  { LOGIN } = require('../config/error_config')

module.exports = async (ctx, next) => {
  // console.log('ctx, next',ctx, next)
  //存在session信息，才next（）执行下一个中间件事件
  // await next();
  // return;

  if (ctx.session.userInfo) {
    await next()
    return
  }

  ctx.body = returnInfo(LOGIN.NOT_LOGIN_STATUS)
}
