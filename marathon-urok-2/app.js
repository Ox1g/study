const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

// Добавляем обработчики событий перетаскивания
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    // Добавляем класс и скрываем элемент для анимации
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    // Убираем все временные классы и показываем элемент
    event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    // Разрешаем перетаскивание
    event.preventDefault();
}

function dragenter(event) {
    // Добавляем визуальную индикацию того, что можно бросить элемент
    if (event.target.classList.contains('placeholder')) {
        event.target.classList.add('hovered');
    }
}

function dragleave(event) {
    // Убираем визуальную индикацию
    if (event.target.classList.contains('placeholder')) {
        event.target.classList.remove('hovered');
    }
}

function dragdrop(event) {
    // Убираем индикацию и добавляем элемент в новый placeholder
    event.preventDefault();
    event.target.classList.remove('hovered');
    if (event.target.classList.contains('placeholder')) {
        event.target.append(item); // Добавляем элемент в новый placeholder
    }
}
