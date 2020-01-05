namespace Demo02 {
    export const A = {
        a: 123,
    }
}
namespace Demo02 {
    export const B = {
        b: 456,
    }
}

const ab = { ...Demo02.A, ...Demo02.B };
console.log(ab);
