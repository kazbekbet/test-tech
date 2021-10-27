/**
 * Функция, реализующая генератор поэтапных проверок.
 *
 * @param {R} finalCall - Финальная функция.
 * @param {T} checkers - Функции проверки всех этапов перед вызовом finalCall.
 * */
function checkBeforeComplete<T, R extends () => T>(finalCall: R, checkers: R[]) {
    function* generate() {
        for (const checker of checkers) {
            if (checker()) {
                yield checker;
            } else {
                return;
            }
        }
        finalCall();
    }

    const checkersIterator = generate();

    for (const checker of checkersIterator) {
    }
}
