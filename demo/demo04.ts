/**
 * namespace —— 命名空间
 * 命名空间只能输出 class类、interface接口 以及 type类型别名
 */

declare namespace animalFactory {
    interface AnimalOptions {
        name: string;
        height?: number;
        weight?: number;
    }
    interface create {
        (name: string, animalOptions?: AnimalOptions): number
    }
    class Peson {
        user: string;
        age: number;
    }
    type aaa = number | boolean;
}
let fun: animalFactory.create = () => 12;
// fun();
let p1: animalFactory.Peson = {
    user: 'so',
    age: 18
}

let a: animalFactory.aaa = 12;

