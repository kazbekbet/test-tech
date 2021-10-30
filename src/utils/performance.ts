/**
 * Хелпер для замера производительности исполняемой функции.
 *
 * @param {string} name - Название измерений.
 * @param {Function} fn - Исполняемая функция.
 * */
export function printPerformance(name: string, fn: Function) {
    console.time(`measure ${name}`);
    const result = fn();
    console.timeEnd(`measure ${name}`);

    return function(logResults: boolean) {
        logResults && console.log(result);
    }
}
