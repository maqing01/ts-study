/**
 * 基础类型
 * 注意：类型后跟“?”表示该项可选
 */

// 布尔值
let isTrue: boolean = false;

// 数字
let num: number = 123;

// 字符串
let str: string = 'hello world';

// 数组
let arr1: number[] = [12, 34];
let arr2: Array<number> = [12, 34];

// 对象 —— 任何引用对象或 null
let obj: object = function () {

};
obj = []; // 数组也是object

// 元组 —— 表示一个已知元素数量和类型的数组，各元素的类型不必相同
// ? —— 问号表示可选
// 超出边界的元素采用联合类型
let elem1: [string, number, boolean?] = ['hello world', 123];
let elem2: [string, number] = ['hello world', 123];
elem2.push('string');
elem2.push(101);
// elem2.push(false);

// 枚举 enum
// 枚举对象不得为数组类型
// 枚举对象成员名不得为数字
// 先定义枚举类型，并进行初始化
// 默认初始值为从0开始的数字，也可以自定义初始值
// 初始值才是真正的枚举值
// 初始值为数字时可以通过枚举值得到它的名字
enum Color { Red = '星期天', Green = '星期一', Blue = 3 };
let c: Color = Color.Red;
console.log(c); // 初始值才是真正的枚举值 —— '星期天'
let p: string = Color[3]; // 枚举值名字为string类型 对比编译后文件即可得出区别
console.log(p);

// Any
// 为不清楚类型的变量指定的类型
// 值可能来自动态的内容，如用户输入或第三方代码库
// 不希望类型检查器对这些值进行检查
let notSure: any = 123;
notSure = 'hello world';
notSure = true;
notSure = undefined;
notSure = null;

// Void
// 表示没有任何类型
// 函数没有返回值时，其返回值类型是 void
// void类型的值只能是 undefined和null
function warnUser(): void {
    alert("This is my warning message");
    // return null;
}
let unusable1: void = undefined;
let unusable2: void = null;
// let unusable3: void = 12;

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null
// 默认情况下null和undefined是所有类型的子类型
// 可以把 null和undefined 赋值给其他类型的变量
/**
 *  指定 --strictNullChecks 标记，null和undefined只能赋值给void和它们各自 —— 避免很多问题
 **/

// Never
// 表示的是那些永不存在的值的类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail(): never { // 子函数报错，父函数已停止执行
    return error("Something failed");
}

// 类型断言
// 场景：有时候会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
// 类型断言好比其它语言里的类型转换，没有运行时的影响，只是在编译阶段起作用
// 类型断言有两种形式：“<>” 和 “as”
// 两种形式是等价的，但是当在TypeScript里使用JSX时，只支持as语法
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

// 类型别名
type mul = number | string | boolean;
let val: mul = 12

// 联合类型
// 同时支持多种类型
let someValue: string | number | boolean = true;
let someArr: (string | number | boolean)[] = [1, true, 'hello world'];

// 交叉类型
// 交叉类型是将多个类型合并为一个类型
// 包含了所有类型所需的的特性
interface Foo {
    name: string;
    age: number;
}
interface Bar {
    name: string;
    gender: string;
}
type Com = Foo & Bar;
let com: Com = { name: 'xiaomage', age: 12, gender: "" }