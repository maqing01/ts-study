// 全局变量
// 常量 declare const
// 块级作用域 declare let
declare var foo: number;

// 全局函数
// 使用declare function声明函数
declare function greet(greeting: string): void;

// 带属性的对象
// 使用declare namespace描述用点表示法访问的类型或值
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

// 函数重载
// 如下：getWidget函数接收一个数字，返回一个组件，或接收一个字符串并返回一个组件数组
// declare function getWidget(n: number): Widget;
// declare function getWidget(s: string): Widget[];

// 可重用类型（接口）
// 使用interface定义一个带有属性的类型
interface GreetingSettings {
    greeting: string;
    duration: number;
    color?: string;
}
declare function greet(setting: GreetingSettings): void;

// 可重用类型（类型别名）
// 使用类型别名来定义类型的短名 
// type 关键字
// type GreetingLike = string | (() => string) | MyGreeter;
// declare function greet(g: GreetingLike): void;

// 组织类型
// 使用命名空间组织类型
declare namespace GreetingLib {
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}
// 创建嵌套的命名空间
declare namespace GreetingLib.Options {
    // Refer to via GreetingLib.Options.Log
    interface Log {
        verbose?: boolean;
    }
    interface Alert {
        modal: boolean;
        title?: string;
        color?: string;
    }
}

// 类
// 使用declare class描述一个类或像类一样的对象
// 类可以有属性和方法，就和构造函数一样
declare class Greeter {
    constructor(greeting: string);
    greeting: string;
    showGreeting(): void;
}
