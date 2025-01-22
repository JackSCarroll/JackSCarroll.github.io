document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('inputText');
    document.addEventListener('keydown', (event) => {
        if (event.key.length === 1) { // Check if the key is a printable character
            inputText.textContent += event.key;
        } else if (event.key === 'Backspace') {
            inputText.textContent = inputText.textContent.slice(0, -1);
        } else if (event.key === 'Enter') {
            if(inputText.textContent.length > 1){
                inputText.textContent = "";
            }
        }
    });
});