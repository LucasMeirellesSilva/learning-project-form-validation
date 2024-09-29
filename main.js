//animação de afundar botões checkbox
const linguagens = document.querySelectorAll('.linguagem');


linguagens.forEach((item) => {
    item.addEventListener('click', function(){
        toggleCheckbox(item);
    });
});

document.querySelectorAll('.exp-input').forEach((item) => {
    item.addEventListener('click', () => {
        toggleRadio(item);
    });
});

function toggleRadio(element){
    const radios = document.querySelectorAll('input[name="experiencia"]');
    radios.forEach((radio) => {
        radio.checked = false;
        radio.closest('.exp-input').classList.remove('checked');
    });
    const checkbox = element.querySelector('.box');
    checkbox.checked = true;
    element.classList.add('checked');
}

function toggleCheckbox(element){
    let checkbox = element.querySelector('.box');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('checked', checkbox.checked);
    let conteudo = element.querySelector('.language-content')
    conteudo.classList.toggle('checked', checkbox.checked);
};

//select custom com dropdown
const selectSpan = document.getElementById('custom-select');
const options = document.querySelector('.options');

selectSpan.addEventListener('click', () => {
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
})

options.querySelectorAll('span').forEach( optionSpan => {
    optionSpan.addEventListener('click', () => {
        selectSpan.textContent = optionSpan.textContent;
        options.style.display = 'none';
        if(selectSpan.textContent === ''){
            selectSpan.textContent = 'Escolha uma opção:'
        }
    })
})

document.addEventListener('click', (event) => {
    if (options.style.display === 'flex' && event.target.closest('custom-select')){
        options.style.display = 'none';
    }
})