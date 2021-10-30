import { Functor } from './utils/functors/functor-impl.js';

import { statuses } from './examples/statuses.js';
import { printPerformance } from './utils/performance.js';
import { findCollectionIntersection } from './utils/collections.js';
import { createNumberArray } from './utils/array-creator.js';

printPerformance('statuses', () => findCollectionIntersection(statuses, 'description'));

const array = createNumberArray(10e6);

function mapNumberFunc<T extends number>(value: T[]) {
    const newArr = [];

    for (let i = 0; i < value.length; i++) {
        newArr.push((value[i] + i) ** i);
    }

    return newArr;
}

function createFunctorArray() {
    return new Functor(array)
        .map(mapNumberFunc)
        .value;
}

printPerformance('functor works: ', createFunctorArray)(false); //560 ms

printPerformance('standart works: ', () => {
    return array.map((el, i) => el + i).map((el, i) => el ** i);
})(false); //1.5 sec

