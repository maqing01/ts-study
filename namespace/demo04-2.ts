/**
 * /// <reference path="..." />
 * 用于声明文件间的依赖
 * 指令只能导入声明信息 其他信息会被忽略 Line27
 **/
/// <reference path="demo04-1.ts" />
namespace Demo04 {
    export interface Student extends Person {
        grade: number;
    }
    export class Child implements Student {
        public name: string;
        public gender: 'F' | 'M';
        public age: number;
        public grade: number;
        constructor({ name, gender, age, grade }: Student) {
            this.name = name;
            this.gender = gender;
            this.age = age;
            this.grade = grade;
        }
    }
}

/**
 * const p = Demo04.p;
 * console.log(p); // undefined
 */

const c = new Demo04.Child({
    name: 'xiaoma',
    gender: 'M',
    age: 8,
    grade: 2
})

console.log(c)
