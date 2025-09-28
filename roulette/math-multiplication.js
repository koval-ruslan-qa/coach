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
    currentA = aValues[Math.floor(Math.random() * aValues.length)];
    currentB = Math.floor(Math.random() * 19) + 2;
    
    exampleElement.textContent = `${currentA} × ${currentB}`;
    answerElement.textContent = currentA * currentB;
    
    // Скрываем ответ но сохраняем место
    answerElement.style.visibility = 'hidden';
    
    actionButton.textContent = 'Покажи ответ';
    isAnswerShown = false;
}

// Обработчик клика по кнопке
function handleButtonClick() {
    if (!isAnswerShown) {
        // Показываем ответ
        answerElement.style.visibility = 'visible';
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
