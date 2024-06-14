const fs = require('fs');

// 获取当前时间并格式化
const now = new Date();
const options = { timeZone: 'Asia/Shanghai', hour12: false };
const dateStr = now.toLocaleString('zh-CN', options);

// 生成消息
const message = `文件最后执行时间: ${dateStr}, (每天早上八点执行一次)`;

// 写入到日志文件
const filePath = 'TEMP.txt';
fs.writeFileSync(filePath, message);

// 输出最后执行时间到控制台
console.log(message);
