const fs = require('fs');

try {
  console.log("开始执行脚本");

  // 获取当前时间并格式化
  const now = new Date();
  const options = { timeZone: 'Asia/Shanghai', hour12: false };
  const dateStr = now.toLocaleString('zh-CN', options);

  // 生成消息
  const message = `文件最后执行时间: ${dateStr}, (每天早上八点执行一次)`;
  console.log("生成消息成功:", message);

  // 写入到日志文件
  const filePath = 'TEMP.txt';
  fs.writeFileSync(filePath, message);
  console.log("写入文件成功:", filePath);

  // 返回生成的消息字符串
  return message;
} catch (error) {
  console.error("脚本执行过程中发生错误:", error);
}
