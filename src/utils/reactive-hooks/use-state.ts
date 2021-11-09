function reaction() {
    console.log('Reacted!');
}

class Reactive<T> {
    constructor(private _value: T) {}

    private valueSetter(newValue: T) {
        this._value = newValue;
        reaction();
    }

    setValue(newValue: T) {
        if (newValue instanceof Object || newValue instanceof Array) {
            this.valueSetter(newValue);
            return;
        }

        if (newValue !== this._value) {
            this.valueSetter(newValue);
        }
    };

    getValue() {
        return this._value;
    }

    get ctx() {
        return this;
    }
}

function useState<T>(defaultValue: T): [() => T, (newValue: T) => void] {
    const { getValue, setValue, ctx } = new Reactive(defaultValue);

    return [getValue.bind(ctx), setValue.bind(ctx)];
}

export { useState };
