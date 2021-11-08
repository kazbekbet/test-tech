import { createNumberArray } from '../array-creator.js';
import { Functor } from './functor-impl.js';
import { printPerformance } from '../performance.js';

const array = createNumberArray(10e6);

function mapNumberFunc<T extends number>(value: T[]) {
    const newArr = [];

    for (let i = 0; i < value.length; i++) {
        newArr.push((value[i] + i) ** i);
    }

    return newArr;
}

function createFunctorArray() {
    return new Functor(array).map(mapNumberFunc).value;
}

printPerformance('functor works: ', createFunctorArray)(false); //560 ms

printPerformance('standart works: ', () => {
    return array.map((el, i) => el + i).map((el, i) => el ** i);
})(false); //1.5 sec