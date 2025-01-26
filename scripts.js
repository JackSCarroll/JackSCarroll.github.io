
const container = document.getElementById('main-console-container');
container.addEventListener('animationend', () => {
    container.classList.remove('apply-shake');
});

//
// Page selection logic for user to type in the page they want to go to.
//
const inputText = document.getElementById('inputText');
document.addEventListener('keydown', (event) => {
    if (event.key.length === 1) { // Check if the key is a printable character
        inputText.textContent += event.key;
    } else if (event.key === 'Backspace') {
        inputText.textContent = inputText.textContent.slice(0, -1);
    } else if (event.key === 'Enter') {
        if(inputText.textContent.length === 0 || isNaN(inputText.textContent) || inputText.textContent > 3) {
            inputText.textContent = "";
            container.classList.add('apply-shake');
        } else {
            if(inputText.textContent === '1') {
                const currentPage = window.location.pathname;
                if(currentPage.includes('index.html')) {
                    window.location.href = 'projects.html';
                }
                if(currentPage.includes('projects.html')) {
                    window.location.href = 'index.html';
                }
            }
        }
    }
});
//
// Main page console wiggle logic
//
document.addEventListener('mousemove', (event) => {
    const moveX = (event.clientX / window.innerWidth) * 10 - 5;
    const moveY = (event.clientY / window.innerHeight) * 10 - 5;
    container.style.transform = `translate(${moveX}px, ${moveY}px)`;
});