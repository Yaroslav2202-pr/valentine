// Знаходимо ваші кнопки за класами
const yesBtn = document.querySelector('.button_y');
const noBtn = document.getElementById('noBtn') || document.querySelector('.button_n');

// Змінна для збереження поточного розміру (1 = 100%)
let currentScale = 1;

// Логіка для кнопки "No" (збільшує Yes)
noBtn.addEventListener('click', () => {
    // Збільшуємо коефіцієнт масштабу
    currentScale += 0.5;

    // Змінюємо розмір кнопки Yes
    yesBtn.style.transform = `scale(${currentScale})`;

    // Опціонально: трохи відсуваємо кнопки одну від одної, щоб не налізали
    yesBtn.style.marginRight = `${20 * currentScale}px`;
});

// Логіка для кнопки "Yes" (перехід на іншу сторінку)
yesBtn.addEventListener('click', () => {
    // Вкажіть тут посилання на сторінку "Дякую" або інший сайт
    window.location.href = "index2.html";
});