// "noImplicitAny": true
function demo01 (p: any) {
    console.log(p);
}

// "noImplicitThis": true
function demo02() {
    console.log(this);
}

// "strictPropertyInitialization": true
interface IDemo {
    name: string;
    say(): void;
}
class Person implements IDemo {
    name: string;
    say = () => {
        console.log(`hello ${this.name}`);
    }
}

// 泛型不指定具体类型 不提示隐式any错误 类型推断
function demo03<T>(p:T): T {
    return p;
}


demo03('hello world');


// "strictFunctionTypes": true
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { xa : number; yb: number }
// interface MouseEvent{ timestamp: number; xa : number; yb: number }
interface KeyEvent extends Event { keyCode: number }

// 回调之类的情况  传递参数函数
function listenEvent(eventType: EventType, handler: (e: Event) => void) {
    /* ... */
}

// 调用的时候修改回调函数参数定义 用子类型替代赋类型 报错
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.xa + ',' + e.yb));

// 类型断言兼容
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).xa + ',' + (<MouseEvent>e).yb));
listenEvent(EventType.Mouse, <(e: Event) => void> ((e: MouseEvent) => console.log(e.x + ',' + e.y)));
