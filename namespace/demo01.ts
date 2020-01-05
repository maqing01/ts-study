/*********
// ts to js
var Demo01;
(function (Demo01) {
    Demo01.A = {
        a: 123,
        b: 456
    };
})(Demo01 || (Demo01 = {}));
var a = Demo01.A;
console.log(a);
*********/
namespace Demo01 {
    export const A = {
        a: 123,
        b: 456
    }
}

const a = Demo01.A;
console.log(a)
