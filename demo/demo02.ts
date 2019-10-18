/**
 * 接口
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 */

// 接口初探
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 接口中定义的任何类型(除never)，都可以在实现时指明由any替换
interface aaa { (name: string): boolean }
let so: aaa;
so = (name: string): any => name

// 可选属性 —— ?
interface SquareConfig1 {
    color?: string;
    width?: number;
}
function createSquare1(config: SquareConfig1): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare1 = createSquare1({ color: "black" });

// 只读属性
// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，去掉了所有可变方法
// 因此可以确保数组创建后再也不能被修改
// const 和 readonly —— 做为变量使用的话用 const，做为属性则使用readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// 额外的属性检查 —— 索引签名 —— 后续
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any // 无此项，非color或width参数会报错；
    // 有此项，表示的是SquareConfig可以有任意数量的属性
    // 并且只要它们不是color和width，那么就无所谓它们的类型是什么
}
function createSquare2(config: SquareConfig2): any {
    // ...
}
let mySquare2 = createSquare2({ colour: "red", width: 100});

// 函数类型
// 为了使用接口表示函数类型，需要给接口定义一个调用签名
// 形式就像是一个只有参数列表和返回值类型的函数定义
// 参数列表里的每个参数都需要名字和类型
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
// 可选参数 —— (b?：number)
// 默认参数 —— (b：number = 100)
// 剩余参数 —— (a:number,b:number,...num:number[])
interface SearchFunc {
    (source: string, subString: string, ...others: any[]): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}
mySearch('hello' , 'world', false)

// 可索引的类型
// 能够“通过索引得到”的类型
// 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
// 共有支持两种索引签名：字符串和数字
// 如果对象索引的类型为 number，则结果可为数组形式
// 如果对象索引的类型为 string，则结果只为对象形式
interface StringArray {
    [index: number]: string; // 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值
}
let myArray1: StringArray;
// myArray = ["Bob", "Fred"];
myArray1 = { "0": "Bob", 1: "Fred"};
let myStr: string = myArray1[0];
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
// 因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}
// 可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

// 类类型
// 强制一个类去符合某种契约 —— 定义接口、创建类实现接口

// 实现接口
interface Com { // 在接口中描述一个方法
    data: {
        a: string;
        b: number;
    }
    fun(a:string):boolean; // 定义一个方法，该方法有一个字符串参数，返回值为布尔值
}
class C implements Com {
    data: {a: 'hello', b: 0}
    fun(a: string) { // 在类里实现它
        return !!a
    }
}

// 类静态部分与实例部分的区别


// 继承接口
// 和类一样，接口也可以相互继承
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square: Square;
square.color = "hello";
square.sideLength = 10;

// 混合类型


// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
    select() { }
}
// 错误：“Image”类型缺少“state”属性。
// class Images implements SelectableControl {
//     select() { }
// }
class Local {

}
