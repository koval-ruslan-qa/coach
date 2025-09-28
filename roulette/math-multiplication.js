// Массив фиксированных значений для переменной a
const aValues = [35, 17, 8, 11, 5, 25];

// Переменные для текущего примера
let currentA = 0;
let currentB = 0;
let isAnswerShown = false;

// Элементы DOM
let exampleElement;
let answerElement;
let actionButton;

// Инициализация страницы
function initMultiplicationPage() {
    exampleElement = document.getElementById('example');
    answerElement = document.getElementById('answer');
    actionButton = document.getElementById('actionButton');
    
    // Генерируем первый пример
    generateNewExample();
    
    // Назначаем обработчик кнопки
    actionButton.addEventListener('click', handleButtonClick);
}

// Генерация нового примера
function generateNewExample() {
    // Мгновенно скрываем ответ без анимации
    answerElement.classList.add('hidden');
    
    // Ждем один кадр анимации
    requestAnimationFrame(() => {
        // Случайный выбор a из массива
        currentA = aValues[Math.floor(Math.random() * aValues.length)];
        
        // Случайный выбор b от 2 до 20
        currentB = Math.floor(Math.random() * 19) + 2;
        
        // Обновляем отображение примера
        exampleElement.textContent = `${currentA} × ${currentB}`;
        
        // Обновляем ответ
        answerElement.textContent = currentA * currentB;
        
        // Обновляем текст кнопки
        actionButton.textContent = 'Покажи ответ';
        isAnswerShown = false;
    });
}

// Обработчик клика по кнопке
function handleButtonClick() {
    if (!isAnswerShown) {
        // Показываем ответ
        answerElement.classList.remove('hidden');
        actionButton.textContent = 'Следующий пример';
        isAnswerShown = true;
    } else {
        // Генерируем новый пример
        generateNewExample();
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initMultiplicationPage();
});
