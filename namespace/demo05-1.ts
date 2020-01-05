export namespace Person {
    export interface Person {
        name: string;
        gender: 'F' | 'M';
        age: number;
    }
    export const p: Person = { name: 'xiaozhou', gender: 'F', age: 12 };
}
