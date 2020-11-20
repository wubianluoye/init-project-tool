/**
 * @param {String} fmt Formate rule
 * @returns {String}
 */
// eslint-disable-next-line no-extend-native
Date.prototype.format = function(fmt = 'yyyy-MM-dd') {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

/**
 * @param {*Number} num 带转换数字
 * @param {*Number} decimal 保留几位
 */
function round(num, decimal = 4) {
  if (isNaN(num)) {
    return 0
  }
  const p1 = Math.pow(10, decimal + 1)
  const p2 = Math.pow(10, decimal)
  return Math.round((num * p1) / 10) / p2
}

Number.$round = (num, dec) => {
  return round(num, dec)
}

Number.$round4 = function(value) {
  return round(value, 4)
}
