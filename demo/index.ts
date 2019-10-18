import { type } from "os";

/* nterface X { name: string; }
interface Y { name: string; age: number; }

let y: Y =  { name: 'xiaowang', age: 20 };
let x: X = y;
 */
/* interface Data {
    code: number;
    [property: string]: any;
}
let res: Data = {
    code: 0,
    msg: 'success',
    data: {
        status: 666
    }
} */


// 泛型
// 要求输入类型与返回类型相同
/* function returnIn(p: string | number): string | number {
    // 操作
    return p;
} */

/* function returnIn<T>(p: T): T {
    // 操作
    return p;
}
returnIn<string>('hello world!'); */

// 泛型约束
interface HasLength {
    length: number;
}
function returnLen<T extends HasLength>(p: T): number {
    return p.length;
}
returnLen('hello world');

// 类型映射
interface Data {
    code: number,
    msg: string;
}
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}
type ReadonlyData = MyReadonly<Data>;

interface Fun {
    (p: boolean): string;
}

const fun: Fun = function (p) {
    if (p) {
        return 'hello';
    }
    return 'world';
}
