/**
 * Создаёт массив с определенным количеством элементов.
 *
 * @param {number} count - Количество элементов.
 * */
export function createNumberArray(count: number): number[] {
    return new Array(count).fill(1);
}
