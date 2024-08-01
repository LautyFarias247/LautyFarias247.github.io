const texts = ['sitemas de gestión', 'landing pages', 'e-commerce'];
const typingElement = document.getElementById('typing-effect');
const typingSpeed = 50;
const eraseSpeed = 65;
const delayBetweenTexts = 800;

let currentTextIndex = 0;
let currentCharIndex = 0;
let isErasing = false;

function type() {
    const currentText = texts[currentTextIndex];
    if (isErasing) {
        if (currentCharIndex > 0) {
            typingElement.textContent = currentText.slice(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(type, eraseSpeed);
        } else {
            isErasing = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(type, delayBetweenTexts);
        }
    } else {
        if (currentCharIndex < currentText.length) {
            typingElement.textContent = currentText.slice(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            isErasing = true;
            setTimeout(type, delayBetweenTexts);
        }
    }
}

type();
