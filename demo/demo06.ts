/**
 * 泛型
 * 泛型是程序设计语言的一种特性
 * 允许程序员在强类型程序设计语言中编写代码时定义一些可变部分，那些部分在使用前必须作出指明
 * 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
 * 泛型类看上去与泛型接口差不多。 泛型类使用 <> 括起泛型类型，跟在类名后面
 */

// 泛型变量 —— T —— 泛型类型
function identity1<T>(arg: T): T { // T 为可变部分
    return arg;
}
identity1<number>(12) // 使用前必须作出指明泛型变量值

// 泛型函数接口
interface GenericIdentityFn<T, U> {
    (arg: T): U;
}
let identity2: GenericIdentityFn<number, string>;
identity2 = function (arg) {
    return '' + arg;
}
identity2(12) // 使用前必须作出指明泛型变量值

// 泛型类
class GenericNumber<T, U> {
    zeroValue1: T;
    zeroValue2: U;
    add: (x: T, y: T) => U;
}
let myGenericNumber = new GenericNumber<number, string>();
myGenericNumber.zeroValue1 = 0;
myGenericNumber.zeroValue2 = '0';
myGenericNumber.add = function (x, y) { return x + y + ''; };

// 泛型约束
// 定义一个接口来描述约束条件，使用这个接口和extends关键字来实现约束
// 泛型函数被定义了约束后，它不再适用于任意类型
// 需要传入符合约束类型的值，必须包含必须的属性
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
loggingIdentity('')
