/**
 * Получение ссылки к DOM элементу по его идентификатору и её присвоение переменной.
 * */
const completeBtn = document.getElementById('complete-button');

/**
 * Объявление функции, которую необходимо выполнить при инициации события.
 * */
function completeAction() {
    // --> Логика выполнения операции.
}

/**
 * Установка слушателя на клик по объявленному элементу из DOM.
 * */
if (completeBtn) {
    completeBtn.addEventListener('click', completeAction);
} else {
    throw new Error('completeBtn is not found on page');
}

const nodeElement = {
    tagName: 'ul',
    attributes: { class: 'list' },
    children: [
        {
            tagName: 'li',
            attributes: { class: 'list_item' },
            textContent: 'Первый элемент списка',
        },
        {
            tagName: 'li',
            attributes: { class: 'list_item' },
            textContent: 'Второй элемент списка',
        },
    ],
};


