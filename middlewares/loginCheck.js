const { returnInfo } = require('../libs/utils'),
      { LOGIN } = require('../config/error_config');

module.exports = async (ctx, next) => {
  if (ctx.session.userInfo) {
  	await next();
  	return;
  }

  ctx.body = returnInfo(LOGIN.NOT_LOGIN_STATUS);
}