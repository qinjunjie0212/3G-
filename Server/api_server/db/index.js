// 导入mysql模块
const mysql = require('mysql')
// 创建数据库链接对象
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库IP地址
    user: 'root',          //数据库登录账号
    password: 'admin123',      //数据库登录密码
    database: 'data'       //要操作的数据库
})

module.exports = db