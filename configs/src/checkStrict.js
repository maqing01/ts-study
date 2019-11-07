"use strict";
// "noImplicitAny": true
function demo01(p) {
    console.log(p);
}
// "noImplicitThis": true
function demo02() {
    console.log(this);
}
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.say = function () {
            console.log("hello " + _this.name);
        };
    }
    return Person;
}());
// 泛型不指定 不包any错误
function demo03(p) {
    return p;
}
demo03('hello world');
