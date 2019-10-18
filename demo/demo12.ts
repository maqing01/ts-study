/*
// 纯 JavaScript 语法
// 表明TS中类型是可选的

module.exports = (p) => {
    console.log(p);
}
*/
module.exports = (p: string) => {
    console.log(p);
}