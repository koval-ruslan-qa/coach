// Массив фиксированных значений для переменной a
const aValues = [35, 25, 17, 11, 8, 5];

// Переменные для текущего примера
let currentValues = [];
let currentB = 0;
let isAnswerShown = false;

// Элементы DOM
let exampleElement;
let answerElement;
let actionButton;

// Инициализация страницы
function initExamplesPage() {
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
    // Создаем копию массива и перемешиваем
    let shuffledA = [...aValues].sort(() => Math.random() - 0.5);
    
    // Берем первые 3 уникальных значения
    currentValues = shuffledA.slice(0, 3);
    
    // Случайный выбор b от 2 до 20
    currentB = Math.floor(Math.random() * 19) + 2;
    
    // Формируем пример
    const exampleText = `(${currentValues[0]} × ${currentB}) + (${currentValues[1]} × ${currentB}) + (${currentValues[2]} × ${currentB})`;
    exampleElement.textContent = exampleText;
    
    // Вычисляем ответ
    const answer = (currentValues[0] * currentB) + (currentValues[1] * currentB) + (currentValues[2] * currentB);
    answerElement.textContent = `Ответ: ${answer}`;
    
    // Скрываем ответ
    answerElement.style.visibility = 'hidden';
    
    // Обновляем текст кнопки
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
    initExamplesPage();
});
