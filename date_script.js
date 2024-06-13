// date_script.js
import fs from 'fs';
import path from 'path';

// 获取当前时间并格式化
const getFormattedDate = () => {
    const date = new Date();
    return date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
};

// 主执行函数
const main = () => {
    const lastRunTime = getFormattedDate();
    const message = `文件最后执行时间: ${lastRunTime}, (每天早上八点执行一次)`;
    console.log(message);

    // 将执行时间写入到文件中保存
    const logPath = path.join(__dirname, 'lastRunTime.log');
    fs.writeFileSync(logPath, message);

    // 输出最后执行时间，用于后续 GitHub Actions 步骤
    console.log(lastRunTime);
};

main();
