/**
 * Partial —— 把所有属性都转变为可选属性
 */
type ExtractPartial<T> = {
    -readonly [P in keyof T]?: T[P];
}

/**
 * Required —— 把所有属性都转变为必选属性
 */
type ExtractRequired<T> = {
    [P in keyof T]-?: T[P];
}

/**
 * Readonly —— 把所有属性都转变为只读属性
 */
type ExtractReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

/**
 * Writable —— 把所有只读属性都转变为普通属性
 */
type ExtractWritable<T> = {
    -readonly [P in keyof T]: T[P];
}

/**
 * Pick —— 从提供的类型变量中挑选需要的属性
 */
type ExtractPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

/**
 * Record —— 为需要的属性指定类型，生成新类型
 * 非同态类型本质上会创建新的属性，不会从它处拷贝属性修饰符
 */
type ExtractRecord<K extends keyof any, T> = {
    [P in K]: T;
}

/**
 * Exclude —— 排除
 */
type ExtractExclude<T, U> = T extends U ? never : T;
// 排除 联合类型 中指定的子类型
// type T = ExtractExclude<'x' | 'y' | 'z', 'x'> // 'y' | 'z'

/**
 * Extract —— 提取
 */
type ExtractExtract<T, U> = T extends U ? T : never;
// 提取指定的 联合类型
// type T = ExtractExtract<'x' | 'y' | 'z', 'x' | 'z'>

/**
 * Omit —— 忽略接口中指定的属性
 */
type ExtractOmit<T, K extends keyof any> = Pick<T, ExtractExclude<keyof T, K>>
// type T = ExtractOmit<{a: string, b: number}, 'b'>

/**
 * NonNullable —— 过滤掉 联合类型 中的 null 和 undefined 类型
 */
type ExtractNonNullable<T> = T extends null | undefined ? never : T;
// type T = ExtractNonNullable<string | undefined | null>

/**
 * Parameters —— 获取函数的全部参数类型，以 元组类型 返回
 */
type ExtractParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * ReturnType —— 获取函数的返回值类型，如果多个类型则以 联合类型 方式返回
 */
type ExtractReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

/**
 * ConstructorParameters —— 获取 构造函数 的全部参数
 */
type ExtractConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

/**
 * InstanceType —— 获取 构造函数 的返回类型，如果是多个就以 联合类型 的方式返回
 */
type ExtractInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never;
