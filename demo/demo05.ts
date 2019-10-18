/**
 * 需要安装@types/node，之后才能导入node内置模块
 */

import * as http from "http";

http.createServer((req, res) => {
    console.log(123);
    res.end('ok');
}).listen(3000);
