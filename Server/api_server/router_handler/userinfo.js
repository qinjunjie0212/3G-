const db = require('../db/index')
exports.getUserInfo = (req, res) => {
    const sql = `select name, tel, qq, banji, dir, status from user where tel=?`
    console.log(req.user);
    db.query(sql, req.user.tel, (err, results) => {
        if(err) {
            return res.send(err.message)
        }
        if(results.length !== 1) {
            return res.send({
                message: '获取用户信息失败'
            })
        }
        res.send({
            message: '获取用户信息成功',
            data: results[0]
        })
    })
}