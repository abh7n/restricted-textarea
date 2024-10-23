const textArea = document.getElementById('text-area');
const charCount = document.getElementById('char-count');

textArea.addEventListener('input',() => {
    const currentLength = textArea.value.length;
    const maxLength = textArea.getAttribute('maxlength');

    charCount.textContent = `${currentLength}/${maxLength}`;

    if (currentLength >= maxLength) {
        textArea.classList.add('red-border','over-limit');
        charCount.style.color = 'red';
    }else {
        textArea.classList.remove('red-border','over-limit');
        charCount.style.color = 'black';
    }
})