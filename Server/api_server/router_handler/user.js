// 导入数据库操作模块，用以监测数据变化
const db = require('../db/index')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入配置文件
const config = require('../config')
// 报名的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    console.log(userinfo);
    // 定义mysql语句：检测电话号码是否已报名
    const sql = 'select * from user where tel=?'
    // 判断数据是否合法
    // if(!userinfo.name || !userinfo.tel || !userinfo.qq || !userinfo.class || !userinfo.dir) {
    //     return res.send({
    //         message: '表单中各项均不能为空'
    //     })
    // }
    db.query(sql, userinfo.tel, function (err, results) {
        // 执行sql语句失败
        if(err) {
            return res.send({
                message: err.message
            })
        }
        // 电话号码已存在
        if(results.length > 0) {
            return res.send({
                message: '该电话号码已报名！'
            })
        }

        // 电话号码没问题，可以在数据库中插入新成员
        const sql = 'insert into user set ?'
        db.query(sql, {name: userinfo.name, tel: userinfo.tel, qq: userinfo.qq, banji: userinfo.banji, dir: userinfo.dir}, function(err, results) {
            // 执行sql语句失败
            if(err) {
                return res.send({
                    message: err.message
                })
            }
            // sql语句执行成功，但影响行数不为1
            if(results.affectedRows !== 1) {
                return res.send({
                    message: '报名失败，请稍后再试'
                })
            }
            // 报名成功
            res.send({
                message: '报名成功'
            })
        })
    })
}

// 登录的处理函数
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = `select * from user where tel=?`
    db.query(sql, userinfo.tel, function(err, results) {
        if(err) {
            return res.send(err.message)
        }
        if(results.length !== 1) {
            return res.send({
                message: '登录失败'
            })
        }
        //在服务器端生成Token字符串
        const user = {...results[0], dir:''}
        //对用户信息进行加密，生成Token字符串
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '72h', // token 有效期为 72 个小时
        })
        res.send({
            status: 0,
            message: '登录成功',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer' + tokenStr,
        })
    })
}