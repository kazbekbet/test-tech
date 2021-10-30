import { Functor } from './utils/functors/functor-impl.js';

import { statuses } from './examples/statuses.js';
import { printPerformance } from './utils/performance.js';
import { findCollectionIntersection } from './utils/collections.js';
import { createNumberArray } from './utils/array-creator.js';

printPerformance('statuses', () => findCollectionIntersection(statuses, 'description'));

const array = createNumberArray(1000);

function createFunctorArray() {
    return new Functor(array)
        .map((el) => el.map((el, i) => el + i))
        .map((el) => el.map((el, i) => el ** i))
        .value;
}

printPerformance('functor works: ', createFunctorArray);

printPerformance('standart works: ', () => array.map((el, i) => el + i).map((el, i) => el ** i));
