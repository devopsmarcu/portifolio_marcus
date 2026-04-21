// Typewriter Effect
const heroText = [
    "> Marcus Silva — IT Technician & Software Developer",
    "> Salvador, BA · UFBA Science and Technology '26",
    "> Santa Casa da Bahia · Sistemas internos · DevOps · Automação"
];

async function typeWriter(elementId, textArray) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    for (let i = 0; i < textArray.length; i++) {
        const line = document.createElement('p');
        line.style.marginBottom = '0.5rem';
        element.appendChild(line);

        const text = textArray[i];
        for (let char of text) {
            line.textContent += char;
            await new Promise(r => setTimeout(r, 20));
        }
        await new Promise(r => setTimeout(r, 150));
    }
    // Add cursor at the end
    const lastLine = element.lastChild;
    if (lastLine) {
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        lastLine.appendChild(cursor);
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize
window.addEventListener('load', () => {
    typeWriter('hero-output', heroText);
});
