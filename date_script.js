const fs = require('fs');

// 获取当前日期和时间
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

// 将日期和时间写入 TEMP.txt 文件
fs.writeFileSync('TEMP.txt', formattedDate);

console.log('日期已写入 TEMP.txt 文件:', formattedDate);
