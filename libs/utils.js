const cp = require('child_process'),
    nanoId = require('nanoid'),
    Qiniu = require('qiniu'),
    crypto = require('crypto'),
    { resolve } = require('path'),
    { qiniu, cryptoSecret } = require('../config/config');

function startProcess(options) {
    const script = resolve(__dirname, '../crawlers/' + options.file),
        //执行子进程
        child = cp.fork(script, []);

    let invoked = false;

    child.on('message', data => {
        options.message(data);
    });

    child.on('exit', code => {
        if (invoked) {
            return;
        }

        invoked = true;
        options.exit(code);
    });

    child.on('error', err => {
        if (invoked) {
            return;
        }

        invoked = true;
        options.error(err);
    });
}
//七牛图片上传配置
function qiniuUpload(options) {
    const mac = new Qiniu.auth.digest.Mac(qiniu.keys.ak, qiniu.keys.sk),
        conf = new Qiniu.conf.Config(),
        client = new Qiniu.rs.BucketManager(mac, conf),
        key = nanoId() + options.ext;

    return new Promise((resolve, reject) => {
        // 使用七牛终端 将url上传到服务器中
        client.fetch(options.url, options.bucket, key, (error, ret, info) => {
            if (error) {
                reject(error);
            } else {
                if (info.statusCode === 200) {
                    resolve({ key });
                } else {
                    reject(info);
                }
            }
        });
    });
}

function makeCrypto(str) {
    const _md5 = crypto.createHash('md5'),
        content = `str=${str}&secret=${cryptoSecret}`;

    return _md5.update(content).digest('hex');
}

function trimSpace(str) {
    return str.replace(/\s+/g, '');
}

function returnInfo(errorInfo, data) {
    if (data) {
        errorInfo.data = data;
    }

    return errorInfo;
}

module.exports = {
    startProcess,
    qiniuUpload,
    makeCrypto,
    trimSpace,
    returnInfo,
};
