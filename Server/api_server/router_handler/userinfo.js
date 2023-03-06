const db = require('../db/index')
exports.getUserInfo = (req, res) => {
    const sql = `select id, name, tel, qq, class, dir form user where tel=?`
    db.query(sql, req.user.tel, (err, results) => {
        if(err) {
            return res.send({
                message: err.message     
            })
        }
        if(results.length !== 1) {
            return res.send({
                message: '获取用户信息失败'
            })
        }
        res.send({
            message: '获取用户信息基本成功',
            data: results[0]
        })
    })
}