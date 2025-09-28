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
