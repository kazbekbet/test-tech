import { State } from './models';

export class ReactiveProxy {
    static setValue<T>(state: State<T>, fn: (newState: State<T>) => void) {
        return new Proxy(state, {
            set: function (target, key, value): boolean {
                target[key] = value;
                fn(target);
                return true;
            },
        });
    }
}
