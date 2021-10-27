/**
 * Тип проверяющей функции.
 * */
export type CheckerCall = (callback?: CheckerCall) => void;

/**
 * Функция, реализующая рекурсивную композицию для поэтапного запуска
 * всех проверок перед финальным вызовом главной функции (например completeTask).
 *
 * @param {Function} finalCallback - Финальная функция.
 * @param {CheckerCall[]} checkers - Функции проверки всех этапов перед вызовом finalCall.
 * */
export function checkBeforeComplete(finalCallback: () => void, checkers: CheckerCall[]) {
    // --> На тот случай, если передали пустой список чекеров.
    if (!checkers) {
        console.error(`Массив проверяющих функций в ${checkBeforeComplete.name} пуст!`);
        return;
    }

    const currentChecker = checkers[0];
    // --> Если массив чекеров больше 1, то продолжаем создание рекурсивной композиции чекеров.
    if (checkers.length > 1) {
        // --> При каждом новом вызове формируем новый массив чекеров без currentChecker.
        const updatedCheckers = checkers.slice(1);
        // --> Формируем композицию последующих чекеров.
        const nextChecker = () => checkBeforeComplete(finalCallback, updatedCheckers);

        // --> Вызываем текущий чекер и передаём ему коллбек-композицию.
        currentChecker(nextChecker);
    } else {
        // --> Если в массиве чекеров осталась 1 проверка,то формируем
        // финальный вызов чекера, где аргументом уже выступает finalCall.
        currentChecker(finalCallback);
    }
}
