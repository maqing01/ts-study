interface IType {
    name: string;
    age: number;
}
type T = keyof IType;

const person = {
    name: 'xiaoma',
    age: 23,
};
type P = typeof person;

interface Fun {
    (name: string, age: number): any;
}

type ParamType<T> = T extends (...param: infer P) => any ? P : T;
type Param = ParamType<Fun>;
