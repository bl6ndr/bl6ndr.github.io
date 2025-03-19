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
    "lost in the noise.",
    "i’m breaking.",
    "no one hears me.",
    "it hurts so much.",
    "i’m drowning in them.",
    "nothing left of me.",
    "just silence please.",
    "i fade away."
];

function corruptText(text) {
    let corrupted = '';
    for (let char of text) {
        if (Math.random() < 0.25) {
            corrupted += String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 15) - 7);
        } else if (Math.random() < 0.15) {
            corrupted += char.toUpperCase();
        } else {
            corrupted += char;
        }
    }
    return corrupted;
}

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        textElement.innerText = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 70);
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 400);
    }
}

function glitchText() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const corruptedPhrase = corruptText(randomPhrase);
    typeWriter(corruptedPhrase, 0, () => {
        textElement.classList.add('animate__shakeX');
        setTimeout(() => {
            textElement.innerText = originalText;
            textElement.classList.remove('animate__shakeX');
        }, 1500);
    });
}

setInterval(glitchText, 2000);
