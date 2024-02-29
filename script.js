let buttons = document.querySelectorAll('.button.digit');
let field = document.querySelector('.field');
let point = document.querySelector('.point')

buttons.forEach((div) => {
    div.addEventListener('click', () => {
        if (field.textContent.length < 11) {
            field.textContent += div.textContent;
        }
});
});

point.addEventListener('click', () => {
    if ((!field.textContent.includes('.')) && (field.textContent.length > 0)) {
        field.textContent += point.textContent;
    }
});
