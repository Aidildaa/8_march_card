// Показ ответа и запуск музыки
document.getElementById('joinButton').addEventListener('click', function() {
    document.getElementById('response').innerText = "Керемет! 13 наурызда күтеміз! 🌸";
    const audio = document.getElementById('background-music');
    audio.muted = false; // Включаем звук перед воспроизведением
    audio.play(); // Просто запускаем, без обработки ошибок
});

// Частицы
particlesJS('particles-js', {
    particles: {
        number: { value: 20, density: { enable: true, value_area: 800 } },
        color: { value: '#ff69b4' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    retina_detect: true
});

// Падающие цветы
function createFallingFlower() {
    const flower = document.createElement('div');
    flower.classList.add('falling-flower');
    flower.innerText = ['🌸', '🌷', '🌺'][Math.floor(Math.random() * 3)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('falling-flowers').appendChild(flower);

    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

setInterval(createFallingFlower, 700);
