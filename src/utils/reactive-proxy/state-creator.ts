import { ReactiveProxy } from './ReactiveProxy.js';
import { State } from './models';

function pureReaction<T>(newState: T) {
    console.log('Reacted!');
    console.log(newState);
}

export function createState<T>(state: State<T>) {
    return ReactiveProxy.setValue(state, pureReaction);
}
