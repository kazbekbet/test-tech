const compute = <T extends unknown>(value: T) => (...funcs: ((value: T) => T)[]) => funcs.reduce((prev, curr) => curr(prev), value);


const age = compute(1)(
    val => val + 2,
    val => val + 1,
    val => val * 2,
    val => val ** 2
);
