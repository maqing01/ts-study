/**
 * 类接口
 * 当操作类和接口的时候，要知道类是具有两个类型的：静态部分(原型方法)的类型和实例的类型
 * 当一个类实现了一个接口时，只对其实例部分进行类型检查
 */
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
        this.h = h;
        this.m = m;
    }
    tick(str) {
        console.log("beep beep");
        return str;
    }
}
// let digital1 = new DigitalClock('12', 17).tick(12);
// let digital2 = createClock(DigitalClock, '12', 17).tick(12);
// let digital3 = createClock(DigitalClock, 12, 17).tick(12);
let digital1 = createClock(DigitalClock, 12, 17);
console.log(digital1);
