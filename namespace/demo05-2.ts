// import 可以导入模块的所有导出信息
import { Person } from "./demo05-1";

const p1 = Person.p;
console.log(p1)

const p2: Person.Person = {
    name: 'xiaozhao',
    gender: 'F',
    age: 28
}
console.log(p2);
