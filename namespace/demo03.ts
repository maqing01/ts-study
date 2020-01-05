namespace Demo03 {
    interface Gender {
        gender: 'F' | 'M';
    }
    export namespace Person { // 外部调用必须导出
        export namespace Child {
            export interface Student extends Gender {
                grade: number;
            }
        }
    }
}

// let gender: Gender; // 找不到名称“Gender” —— 未导出

/**
 * const student: Demo03.Person.Child.Student = {
 *     grade: 2
 * }
 */

// 别名 —— 缩短嵌套调用
import Child = Demo03.Person.Child;
const student: Child.Student = { grade: 2, gender: 'M' }
console.log(student);
