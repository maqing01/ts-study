/**
 * 类接口
 * 当操作类和接口的时候，要知道类是具有两个类型的：静态部分(原型方法和属性)的类型和实例的类型
 * 当一个类实现一个接口时，只对其实例部分进行类型检查
 * constructor、tick存在于类的静态部分，所以不在检查的范围内
 * 因此，应该直接操作类的静态部分
 * 下面的例子，定义了两个接口，ClockConstructor为构造函数所用，ClockInterface为实例方法所用
 * 定义一个构造函数 createClock，它用传入的类型创建实例
 */

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    h: number;
    m: number;
    tick(str: string): string;
}

// ClockConstructor  校验构造函数
// ClockInterface  校验实例输出
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    h;m;
    constructor(h, m) {
        this.h = h;
        this.m = m;
    }
    tick(str) {
        return str
    }
}

let digital1 = new DigitalClock('12', 17).tick(12);
let digital2 = createClock(DigitalClock, '12', 17).tick(12);
let digital3 = createClock(DigitalClock, 12, 17).tick(12);

interface P {
    name: string;
    age: number;
    say(p: string): void
}

class Parent implements P {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say(join) {
        console.log(this.name + join + this.age);
    }
}

const p = new Parent(12, 34).say(12);
