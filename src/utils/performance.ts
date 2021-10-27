/**
 * Хелпер для замера производительности исполняемой функции.
 *
 * @param {string} name - Название измерений.
 * @param {Function} fn - Исполняемая функция.
 * */
export function printPerformance(name: string, fn: Function) {
    console.time(`measure ${name}`);
    fn();
    console.timeEnd(`measure ${name}`);
}
