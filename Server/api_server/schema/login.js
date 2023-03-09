const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 姓名的验证规则
const name = joi.string().pattern(/^[\u4E00-\u9FA5]{2,4}$/).required().messages({
  'string.pattern.base': '姓名应为2~4个中文字符',
  'string.empty': '姓名不能为空'
})
// const name = joi.string().alphanum().min(1).max(10).required()

// 电话号码的验证规则
const tel = joi.string().pattern(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/).required().messages({
    'string.pattern.base': '请输入正确的电话号码',
    'string.empty': '电话号码不能为空'
  })

// 登录表单的验证规则对象
exports.login_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    name,
    tel,
  },
}