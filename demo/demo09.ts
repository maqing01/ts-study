import * as data from './demo10';

interface IData {
    length: number;
}

function getLength(data: IData): number {
    return data.length;
}

const len = getLength(data);

console.log(len);
