const textElement = document.getElementById('text');
const originalText = textElement.innerText;
const phrases = [
    "they never stop.",
    "whispering in my skull.",
    "screaming at me.",
    "day after day after day.",
    "i can’t escape them.",
    "why won’t they leave?",
    "it’s all in my head.",
    "tearing me apart.",
    "lost in the noise."
];

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        textElement.innerText = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
    }
}

function glitchText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    typeWriter(randomPhrase, 0, () => {
        textElement.classList.add('animate__shakeX');
        setTimeout(() => {
            textElement.innerText = originalText;
            textElement.classList.remove('animate__shakeX');
        }, 1000);
    });
}

setInterval(glitchText, 3000);
