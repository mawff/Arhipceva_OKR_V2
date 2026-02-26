const outputDiv = document.getElementById('output');
const uniqueChars = new Set();

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key.length === 1) {
        if (!uniqueChars.has(key)) {
            uniqueChars.add(key);
            outputDiv.textContent = Array.from(uniqueChars).join(' ');
        }
    }
});