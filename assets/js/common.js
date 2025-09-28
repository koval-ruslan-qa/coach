// ===== ОБЩИЕ УТИЛИТЫ ДЛЯ ВСЕХ СТРАНИЦ =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена: ' + document.title);
    initPage();
});

function initPage() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    if (typeof initPageSpecific === 'function') {
        initPageSpecific();
    }
}

// ===== ПУСТЫЕ ЗАГОТОВКИ ДЛЯ БУДУЩЕГО ФУНКЦИОНАЛА =====

// 🎡 РУЛЕТКА - модули
const rouletteModules = {
    math: {
        init: function() {
            // Заготовка для математики рулетки
        }
    },
    
    sectors: {
        init: function() {
            // Заготовка для секторов
        }
    },
    
    completes: {
        init: function() {
            // Заготовка для комплитов
        }
    },
    
    completesIntersection: {
        init: function() {
            // Заготовка для пересечений комплитов
        }
    },
    
    bets: {
        init: function() {
            // Заготовка для ставок
        }
    },
    
    cashPayouts: {
        init: function() {
            // Заготовка для выплат через кэш
        }
    }
};

// ♠️ ПОКЕР - модули
const pokerModules = {
    russian: {
        init: function() {
            // Заготовка для русского покера
        }
    },
    
    texas: {
        init: function() {
            // Заготовка для техасского холдема
        }
    },
    
    oasis: {
        init: function() {
            // Заготовка для покера оазис
        }
    },
    
    sochi: {
        init: function() {
            // Заготовка для сочи покера
        }
    },
    
    blackjack: {
        init: function() {
            // Заготовка для блэк джека
        }
    }
};

// 🧮 ОБЩИЕ МОДУЛИ
const commonModules = {
    calculators: {
        init: function() {
            // Заготовка для калькуляторов
        }
    },
    
    tables: {
        init: function() {
            // Заготовка для таблиц
        }
    },
    
    games: {
        init: function() {
            // Заготовка для игр
        }
    }
};
// ===== МОДУЛЬ ТАБЛИЦЫ УМНОЖЕНИЯ =====
const multiplicationModule = {
    init: function() {
        console.log('Модуль таблицы умножения инициализирован');
    },
    
    // Массив фиксированных значений
    aValues: [35, 17, 8, 11, 5, 25],
    
    // Генерация случайного числа от min до max
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Генерация примера
    generateExample: function() {
        const a = this.aValues[Math.floor(Math.random() * this.aValues.length)];
        const b = this.getRandomInt(2, 20);
        return { a, b, answer: a * b };
    }
};

// ===== МОДУЛЬ ПРИМЕРОВ =====
const examplesModule = {
    init: function() {
        console.log('Модуль примеров инициализирован');
    },
    
    // Массив фиксированных значений
    aValues: [35, 25, 17, 11, 8, 5],
    
    // Генерация случайного числа от min до max
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Перемешивание массива
    shuffleArray: function(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
};
