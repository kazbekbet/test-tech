import { FunctorAbstract } from './functor-abstract.js';
import { FunctorMap } from './models';

/** Примитивный полиморфный функтор. */
export class Functor<T> extends FunctorAbstract<T> {
    get value(): T {
        return this._value;
    }

    map(fn: FunctorMap<T>): FunctorAbstract<T> {
        return new Functor(fn(this._value));
    }
}
