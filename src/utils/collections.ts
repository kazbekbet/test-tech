/**
 * Осуществляет поиск повторений элементов по заданному полю объекта.
 *
 * @param {T[]} array - Весь проверяемый массив.
 * @param {keyof T} filterBy - Проверяемое поле.
 * **/
export function findCollectionIntersection<T extends Object>(array: T[], filterBy: keyof T): T[] {
    const duplicates: T[] = [];

    for (const elem of array) {
        const filterByCondition = array.filter((checkElem) => elem[filterBy] === checkElem[filterBy]);

        if (filterByCondition && filterByCondition.length > 1) {
            duplicates.push(elem);
        }
    }

    return duplicates;
}
