import { FunctorMap } from './models';

export abstract class FunctorAbstract<T> {
    constructor(protected _value: T) {}

    abstract get value(): T;

    abstract map(fn: FunctorMap<T>): FunctorAbstract<T>;
}
