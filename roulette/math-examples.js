// Массив фиксированных значений для переменной a
const aValues = [35, 25, 17, 11, 8, 5];

// Переменные для текущего примера
let currentValues = [];
let currentBValues = [];
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

// Генерация уникальных случайных чисел от min до max
function generateUniqueRandomNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
}

// Генерация нового примера
function generateNewExample() {
    // Создаем копию массива и перемешиваем
    let shuffledA = [...aValues].sort(() => Math.random() - 0.5);
    
    // Берем первые 3 уникальных значения для a
    currentValues = shuffledA.slice(0, 3);
    
    // Генерируем 3 уникальных значения для b от 2 до 20
    currentBValues = generateUniqueRandomNumbers(3, 2, 20);
    
    // Формируем пример
    const exampleText = `(${currentValues[0]} × ${currentBValues[0]}) + (${currentValues[1]} × ${currentBValues[1]}) + (${currentValues[2]} × ${currentBValues[2]})`;
    exampleElement.textContent = exampleText;
    
    // Вычисляем ответ
    const answer = (currentValues[0] * currentBValues[0]) + 
                   (currentValues[1] * currentBValues[1]) + 
                   (currentValues[2] * currentBValues[2]);
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
