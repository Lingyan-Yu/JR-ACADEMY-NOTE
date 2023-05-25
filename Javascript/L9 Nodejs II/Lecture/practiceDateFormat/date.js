// YYYY-MM-DD HH:MM:SS

function convertDate(date) {
    const dt = new Date(date)
    const y = dt.getFullYear()
    const m = addZero(dt.getMonth() + 1)
    const d = addZero(dt.getDate())
    const hh = addZero(dt.getHours())
    const mm = addZero(dt.getMinutes())
    const ss = addZero(dt.getSeconds())
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss 
}

function addZero(num) {
    return num < 10 ? '0' + num : num
}

module.exports = {convertDate}

